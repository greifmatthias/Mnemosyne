import styled from '@emotion/native';
import {Pressable, View} from 'react-native';
import Animated from 'react-native-reanimated';

type StyledWithOpen = {
  isOpen?: boolean;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Root = styled(AnimatedPressable)<StyledWithOpen>(
  ({theme: {colors}, isOpen}) => ({
    borderTopWidth: isOpen ? 1 : 0,
    borderBottomWidth: isOpen ? 1 : 0,
    borderStyle: 'solid',
    borderColor: colors.primary.base,
  }),
);

const HeaderContainer = styled(View)(({theme: {spacings}}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: spacings.md,
  paddingVertical: spacings.md,
}));

const QuickInfoContainer = styled(View)(({theme: {spacings}}) => ({
  flex: 1,
  paddingHorizontal: spacings.md,
}));

const DetailContainer = styled(Animated.View)(({theme: {spacings}}) => ({
  flex: 1,
  paddingHorizontal: spacings.md,
  paddingVertical: spacings.sm,
}));

const DetailRow = styled(Animated.View)(({theme: {spacings}}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: spacings.xxs,
}));

export default {
  Root,

  HeaderContainer,
  QuickInfoContainer,

  DetailContainer,
  DetailRow,
};
