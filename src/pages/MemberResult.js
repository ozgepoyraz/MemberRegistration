import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native';

const MemberResult = ({route}) => {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text> ÜyeAdı: {user.userName}</Text>
      <Text> ÜyeAdı: {user.userName}</Text>
    </SafeAreaView>
  );
};

export default MemberResult;
