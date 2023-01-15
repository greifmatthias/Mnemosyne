import {PressableProps} from 'react-native';
import {AnimateProps} from 'react-native-reanimated';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

export type AvatarProps = AnimateProps<PressableProps> & {
  showAvatar?: boolean;
  showLabel?: boolean;
  avatar?: string;
  label?: string;
  sublabel?: string;
  size?: AvatarSize;
};
