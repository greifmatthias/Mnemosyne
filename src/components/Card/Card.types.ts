import {PressableProps, ViewProps} from 'react-native';
import {AnimateProps} from 'react-native-reanimated';

export type CardProps = AnimateProps<ViewProps> &
  Omit<PressableProps, 'style'> & {
    contentStyle?: PressableProps['style'];
  };
