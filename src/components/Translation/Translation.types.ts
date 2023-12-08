import { PrimitiveType } from 'react-intl';
import { TextProps } from 'react-native';

import { Translation } from 'i18n/messages';

export interface TranslationProps extends TextProps {
  id: Translation;
  values?: Record<string, PrimitiveType>;
}
