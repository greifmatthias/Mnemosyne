import {PressableProps, StyleProp, ViewProps, ViewStyle} from 'react-native';
import {AnimateProps} from 'react-native-reanimated';

import {IconProps} from 'components/Icon';

export type IconButtonProps = AnimateProps<ViewProps> &
  Omit<PressableProps, 'style'> & {
    iconProps?: IconProps;
  };
