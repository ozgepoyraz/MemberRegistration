import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView, StyleSheet} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.title}>Üye Bilgileri</Text>
      <Text style={styles.text}> Adı: {user.userName}</Text>
      <Text style={styles.text}> Soyadı: {user.userLastName}</Text>
      <Text style={styles.text}> Email Adresi: {user.userEmail}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1968c5',
    textAlign: 'center',
    margin: 20,
    borderBottomWidth: 2,
    borderColor: '#1968c5',
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 5,
    marginHorizontal: 20,
  },
});

export default MemberResult;
