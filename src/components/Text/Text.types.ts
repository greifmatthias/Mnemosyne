import {TextProps as RNTextProps} from 'react-native';
import {AnimateProps} from 'react-native-reanimated';

import {Color} from 'theme';

export type TextVariant =
  | 'base'
  | 'small'
  | 'extrasmall'
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'heading4'
  | 'heading5'
  | 'heading6'
  | 'smbutton'
  | 'mdbutton'
  | 'lgbutton';

export type TextProps = AnimateProps<RNTextProps> & {
  variant?: TextVariant;
  color?: Color;
};
