import {ReactNode} from 'react';
import {PressableProps, StyleProp, ViewStyle} from 'react-native';

import {IconProps} from 'components/Icon';
import {TextProps} from 'components/Text';

export type PillVariant = 'primary' | 'secondary' | 'outlined' | 'none';
export type PillSize = 'sm' | 'md' | 'lg';

export type PillProps = Omit<PressableProps, 'children' | 'style'> & {
  variant?: PillVariant;
  size?: PillSize;
  children?: string | ReactNode;
  style?: StyleProp<ViewStyle>;
  iconLeft?: IconProps;
  iconRight?: IconProps;
  textProps?: TextProps;
  isSelected?: boolean;
};
