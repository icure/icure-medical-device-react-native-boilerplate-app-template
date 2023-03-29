import React from 'react';
import {ScrollView, StyleSheet, Image, View, Text, Linking} from 'react-native';

export const Home = () => {
  const openDoc = () => {
    Linking.openURL('https://docs.icure.com/sdks/how-to/index');
  };

  return (
    <ScrollView style={styles.homeScreen}>
      <View style={styles.contentHolder}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.heading}>Well done !</Text>
        <Text style={styles.paraph}>If you arrived here, it means you completed your registration / login successfully.
        Time to head to <Text style={{ textDecorationLine: 'underline' }} onPress={openDoc}>iCure Documentation</Text> to add some data ! </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    height: '100%',
    paddingTop: 40,
    backgroundColor: '#FFFDFE',
  },
  heading: {
    fontSize: 24,
    color: '#40908e',
    textAlign: 'center',
    marginBottom: 10,
  },
  paraph: {
    fontSize: 14,
    color: '#000000',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 10,
  },
  contentHolder: {
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 201,
    resizeMode: 'contain',
  },
});
