import styled from '@emotion/native';
import {Pressable, View} from 'react-native';
import Animated from 'react-native-reanimated';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Root = styled(AnimatedPressable)(({theme: {spacings}}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: spacings.md,
  paddingVertical: spacings.md,
}));

const DetailContainer = styled(View)(({theme: {spacings}}) => ({
  paddingHorizontal: spacings.md,
}));

export default {
  Root,

  DetailContainer,
};
