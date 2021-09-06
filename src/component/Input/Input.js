import React from 'react';
import {TextInput, View, Text} from 'react-native';
import styles from './Input.styles';

const Input = ({label, placeholder, onChangeText, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}></TextInput>
      </View>
    </View>
  );
};

export default Input;
