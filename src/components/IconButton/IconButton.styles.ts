import styled from '@emotion/native';
import {Pressable} from 'react-native';
import Animated from 'react-native-reanimated';

const Root = styled(Animated.View)(() => ({
  width: 32,
  height: 32,
  borderRadius: 999,
  overflow: 'hidden',
}));

const PressableRoot = styled(Pressable)(() => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}));

export default {
  Root,
  PressableRoot,
};
