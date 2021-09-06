import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import Button from '../component/Button';

function Welcome({navigation}) {
  const goToMemberSign = () => {
  navigation.navigate('MemberSignScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button title="Üye Olmak İçin Tıklayın" onPress={goToMemberSign}></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Welcome;
