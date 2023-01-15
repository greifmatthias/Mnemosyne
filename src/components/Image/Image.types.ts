import {ImageProps as RNImageProps} from 'react-native';
import {AnimateProps} from 'react-native-reanimated';

export type ImageDimensions = {
  width: number;
  height: number;
};

export type ImageProps = Omit<AnimateProps<RNImageProps>, 'source'> & {
  source: string;
  enableModal?: boolean;
};
