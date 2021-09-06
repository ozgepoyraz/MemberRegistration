import React, {useState} from 'react';
import {Alert, SafeAreaView} from 'react-native';
import Input from '../component/Input';
import Button from '../component/Button';

const MemberSign = ({navigation}) => {
  const [userName, setUserName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  function handleSubmit() {
    if (!userName || !userLastName || !userEmail || !userPassword) {
      Alert.alert('Uyarı!', 'Lütfen boş bırakmayınız.');
      return;
    }

    const user = {
      userName,
      userLastName,
      userEmail,
      userPassword,
    };

    navigation.navigate('MemberResultScreen', {user});
  }

  return (
    <SafeAreaView>
      <Input
        label="Ad:"
        placeholder="Adınızı giriniz."
        onChangeText={setUserName}
        secureTextEntry={false}></Input>
      <Input
        label="Soyad:"
        placeholder="Soyadınızı giriniz."
        onChangeText={setUserLastName}
        secureTextEntry={false}></Input>
      <Input
        label="E-mail:"
        placeholder="E-mail adreasinizi giriniz."
        onChangeText={setUserEmail}
        secureTextEntry={false}></Input>
      <Input
        label="Şifre:"
        placeholder="Şifre giriniz."
        onChangeText={setUserPassword}
        secureTextEntry={true}></Input>
      <Button title="Kaydı Tamamla" onPress={handleSubmit}></Button>
    </SafeAreaView>
  );
};

export default MemberSign;
