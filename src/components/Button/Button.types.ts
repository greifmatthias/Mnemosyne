import {ReactNode} from 'react';
import {PressableProps, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {AnimateProps} from 'react-native-reanimated';

import {IconProps} from 'components/Icon';
import {TextProps} from 'components/Text';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined' | 'none';
export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonProps = AnimateProps<ViewProps> &
  Omit<PressableProps, 'style' | 'children'> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: string | ReactNode;
    pressableStyle?: PressableProps['style'];
    iconLeft?: IconProps;
    iconRight?: IconProps;
    textProps?: TextProps;
  };
