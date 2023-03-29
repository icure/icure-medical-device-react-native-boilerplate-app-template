import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {globalStyles} from '../../../styles/GlobalStyles';

export type Props = {
  title: string;
  onClick: () => void;
};

export const RoundedButton: React.FC<Props> = ({title, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick} style={styles.appButtonContainer}>
      <Text style={[globalStyles.baseText, styles.appButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: '#40908e',
    paddingHorizontal: 40,
    paddingVertical: 12,
    borderRadius: 25,
  },
  appButtonText: {
    color: '#FFFDFE',
  },
});
