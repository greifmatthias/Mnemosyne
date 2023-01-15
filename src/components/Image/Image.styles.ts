import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

type StyledWithAspectRatio = {
  aspectRatio: number;
};

const Root = styled(Animated.Image)<StyledWithAspectRatio>(
  ({theme: {colors}, aspectRatio}) => ({
    flex: 1,
    aspectRatio,
    backgroundColor: colors.primary.base,
  }),
);

export default {
  Root,
};
