import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import storage from '../utils/storage';

// Configuration object for data persistence with Redux Persist
export const persistConfig = {
  key: 'icure',
  storage: storage,
  whitelist: ['icure'],
};

export interface State {
  cache: string;
  savedCredentials?: {
    tokenTimestamp: number;
    login: string;
    token: string;
  };
}

const initialState = {} as State;

export const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setSavedCredentials(state, {payload: savedCredentials}: PayloadAction<{login: string; token: string; tokenTimestamp: number} | undefined>) {
      state.savedCredentials = savedCredentials;
    },
    revertAll() {
      return initialState;
    },
  },
});

export const {setSavedCredentials, revertAll} = app.actions;