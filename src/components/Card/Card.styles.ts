import styled from '@emotion/native';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

const Root = styled(Animated.View)(({theme: {colors, shapes}}) => ({
  borderRadius: shapes.md,
  backgroundColor: colors.neutral.neutral00,
  borderColor: colors.primary.tint20,
  borderWidth: 1,
  overflow: 'hidden',
}));

const PressableRoot = styled(Pressable)(() => ({
  flex: 1,
}));

export default {
  Root,
  PressableRoot,
};
