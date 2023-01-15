import styled from '@emotion/native';
import LottieView from 'lottie-react-native';

import {LottieSize} from './Lottie.types';

type StyledWithSize = {
  size: LottieSize;
};

const ComponentSize = (size: LottieSize): number =>
  ({
    xs: 36,
    sm: 48,
    md: 72,
    lg: 104,
    xl: 192,
  }[size]);

const Root = styled(LottieView)<StyledWithSize>(({size}) => ({
  width: ComponentSize(size),
  height: ComponentSize(size),
}));

export default {
  Root,
};
