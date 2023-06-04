import React, {useEffect, useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useNavigate} from 'react-router-native';

import {RoundedInput, RoundedButton, TextHelper, ErrorMessage} from '../components/FormElements';
import { routes } from '../navigation/routes';

import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setToken, login, setEmail, completeAuthentication, startAuthentication, setCaptcha } from '../services/api';
import { Constants } from '../config/constants';
import { FriendlyCaptchaComponent } from '../components/FriendlyCaptcha';


export const Login = () => {
  const [isWaitingForCode, setWaitingForCode] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      userEmail: '',
      userCode: '',
    },
  });
  const {online, lsUsername, lsToken} = useAppSelector(state => ({
    ...state.medTechApi,
    lsUsername: state.icure?.savedCredentials?.login,
    lsToken: state.icure?.savedCredentials?.token,
  }));

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lsUsername && lsToken && dispatch) {
      dispatch(setEmail({email: lsUsername}));
      dispatch(setToken({token: lsToken}));
      dispatch(login());
    }
  }, [navigate, lsUsername, lsToken, dispatch]);

  useEffect(() => {
    if (online) {
      navigate(routes.home);
    }
  }, [online, navigate]);

  const onLogin = (data: {userCode: string}) => {
    setWaitingForCode(false);
    dispatch(setToken({token: data.userCode}));
    dispatch(completeAuthentication());
  };
  const onAskCode = (data: {userEmail: string}) => {
    setWaitingForCode(true);
    dispatch(setEmail({email: data.userEmail}));
    dispatch(startAuthentication());
  };

  return (
    <View style={styles.registerScreen}>
      <View style={styles.contentHolder}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
        <Text style={styles.heading}>Login</Text>
        <View style={styles.inputsContainer}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => <RoundedInput label="Email or phone number" onBlur={onBlur} onChange={onChange} value={value} isRequired />}
            name="userEmail"
          />
          {errors.userEmail && <ErrorMessage text="This field is required." />}
          
          <View style={styles.webviewContainer}>
            <FriendlyCaptchaComponent sitekey={Constants.FRIENDLY_CAPTCHA_SITE_KEY} onFinish={value => dispatch(setCaptcha({captcha: value}))} />
          </View>

          {isWaitingForCode ? (
            <>
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => <RoundedInput label="Code" onBlur={onBlur} onChange={onChange} value={value} isRequired />}
                name="userCode"
              />
              {errors.userCode && <ErrorMessage text="This field is required." />}
            </>
          ) : null}
        </View>

        {isWaitingForCode ? <RoundedButton title="Login" onClick={handleSubmit(onLogin)} /> : <RoundedButton title="Receive a one time code" onClick={handleSubmit(onAskCode)} />}

        <View style={styles.textHelperContainer}>
          <TextHelper text="Not registered yet?" url="/register" title="Create an account" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerScreen: {
    flex: 1,
    height: '100%',
    paddingTop: 20,
    backgroundColor: '#FFFDFE',
  },
  heading: {
    fontSize: 24,
    color: '#151B5D',
    textAlign: 'center',
    marginBottom: 32,
    marginTop: 12
  },
  contentHolder: {
    alignItems: 'center',
    padding: 24,
  },
  logo: {
    width: 201,
    resizeMode: 'contain',
  },
  inputsContainer: {
    width: '100%',
    marginBottom: 12,
  },
  textHelperContainer: {
    marginTop: 0,
  },
  webviewContainer: {
    width: '100%',
    marginBottom: 24,
  },
});
