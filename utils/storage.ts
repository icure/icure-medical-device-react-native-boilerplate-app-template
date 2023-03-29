import {StorageFacade} from '@icure/medical-device-sdk';
import {MMKV} from 'react-native-mmkv';

export class AsyncStorageImpl implements StorageFacade<string> {
  storage = new MMKV();
  setItem = (key: string, value: string) => {
    return new Promise(resolve => resolve(this.storage.set(key, value))) as Promise<void>;
  };
  getItem = (key: string) => {
    return new Promise(resolve => resolve(this.storage.getString(key))) as Promise<string | undefined>;
  };
  removeItem = (key: string) => {
    return new Promise(resolve => resolve(this.storage.delete(key))) as Promise<void>;
  };
}

export default new AsyncStorageImpl();