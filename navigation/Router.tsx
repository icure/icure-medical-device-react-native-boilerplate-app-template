import React from 'react';
import {NativeRouter, Route, Routes} from 'react-router-native';
import {Layout} from '../components/layout/Layout';
import {Register} from '../screens/Register';
import {Login} from '../screens/Login';
import {Home} from '../screens/Home';
import {routes} from "./routes";


export const Router = () => (
  <NativeRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path={routes.login} element={<Login />} />
        <Route index path={routes.register} element={<Register />} />
        <Route index path={routes.home} element={<Home />} />
      </Route>
    </Routes>
  </NativeRouter>
);
