import {CircularProgressProps} from 'react-native-circular-progress-indicator/lib/typescript/types';

export type ProgressBarSize = 'sm' | 'md' | 'lg';

export type ProgressBarProps = Partial<CircularProgressProps> & {
  size?: ProgressBarSize;
};
