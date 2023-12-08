import Config from 'react-native-config';
import { MMKV } from 'react-native-mmkv';

export const authStorage = new MMKV({ id: 'authStorage', encryptionKey: Config.AUTH_STORAGE_KEY });

//Add here different storages like app storage
