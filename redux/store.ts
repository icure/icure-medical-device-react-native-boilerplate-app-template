import {configureStore} from '@reduxjs/toolkit';
import {persistedReducer} from './reducer';
import {persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false, immutableCheck: false}).concat(
      thunk,
    ),
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;