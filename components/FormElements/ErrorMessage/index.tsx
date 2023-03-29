import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../../styles/GlobalStyles';

export type Props = {
  text: string;
};

export const ErrorMessage: React.FC<Props> = ({text}) => {
  return (
    <View style={styles.errorTextContainer}>
      <Text style={[globalStyles.baseText, styles.errorText]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorTextContainer: {
    marginBottom: 16,
    marginLeft: 12,
  },
  errorText: {
    color: '#40908e',
  },
});
