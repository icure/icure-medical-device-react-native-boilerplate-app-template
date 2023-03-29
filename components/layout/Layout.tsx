import React from 'react';
import {View} from 'react-native';
import {Outlet} from 'react-router-native';

export const Layout = () => (
  <View>
    <Outlet />
  </View>
);
