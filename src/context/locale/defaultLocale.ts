import Config from 'react-native-config';

import { AppLocale } from './AppLocale.enum';

export const defaultLocale: AppLocale = Config.DEFAULT_LOCALE as AppLocale;
