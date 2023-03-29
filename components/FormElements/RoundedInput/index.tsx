import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';

export type Props = {
  label: string;
  value: string | undefined;
  onChange: () => void;
  onBlur: () => void;
  secureTextEntry?: boolean;
  isRequired?: boolean;
};

export const RoundedInput: React.FC<Props> = ({label, value, onChange, onBlur, secureTextEntry, isRequired}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {isRequired && <Text style={styles.star}>*</Text>} {label}
      </Text>
      <TextInput
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        style={styles.input}
        onBlur={onBlur}
        onChangeText={onChange}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 8,
  },
  label: {
    marginBottom: 8,
    fontSize: 14,
    color: '#151B5D'
  },
  star: {
    color: '#EB3437',
  },
  input: {
    width: '100%',
    height: 42,
    borderWidth: 1,
    borderColor: '#A2A4BE',
    borderRadius: 25,
    fontSize: 13,
    paddingLeft: 12
  },
});
