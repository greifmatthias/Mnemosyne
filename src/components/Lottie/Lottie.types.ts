import {AnimatedLottieViewProps} from 'lottie-react-native';

import {AccentColors} from 'theme';

import {check, pulse} from './assets';

export const animations = {
  check,
  pulse,
};

export type LottieAnimation = keyof typeof animations;

export type LottieSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LottieProps = Omit<AnimatedLottieViewProps, 'source'> & {
  name: LottieAnimation;
  color?: keyof AccentColors;
  size?: LottieSize;
};
