import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from 'react-router-native';
import {globalStyles} from '../../../styles/GlobalStyles';

export type Props = {
  text: string;
  url: string;
  title: string;
};

export const TextHelper: React.FC<Props> = ({text, url, title}) => {
  return (
    <View style={styles.textHelper}>
      <Text style={globalStyles.baseText}>{text}</Text>
      <Link to={url} underlayColor="rgba(236,214,221, 0.5)">
        <Text style={[globalStyles.baseText, styles.link]}>{title}</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  textHelper: {
    flexDirection: 'row',
  },
  link: {
    color: '#40908e',
    marginLeft: 8,
  },
});
