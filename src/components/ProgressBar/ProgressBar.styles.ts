import styled from '@emotion/native';
import CircularProgress from 'react-native-circular-progress-indicator';

import {ProgressBarSize} from './ProgressBar.types';

const sizes: Record<ProgressBarSize, number> = {
  sm: 10,
  md: 12,
  lg: 48,
};

const Root = styled(CircularProgress)(() => ({}));

export default {
  sizes,

  Root,
};
