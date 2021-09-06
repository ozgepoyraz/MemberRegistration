import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import styles from './Button.styles';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
