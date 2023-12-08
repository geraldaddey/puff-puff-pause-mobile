import { Text } from 'react-native';

import { useLocale } from 'hooks/useLocale/useLocale';
import { AppMessages } from 'i18n/messages';

import { TranslationProps } from './Translation.types';

export const Translation = ({ id, values, ...props }: TranslationProps) => {
  const { formatMessage } = useLocale();

  return <Text {...props}>{formatMessage({ id: AppMessages[id] }, values)}</Text>;
};
