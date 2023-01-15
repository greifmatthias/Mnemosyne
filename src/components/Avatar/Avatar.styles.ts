import styled from '@emotion/native';
import {Pressable, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {Image} from 'components/Image';
import {Text} from 'components/Text';

import {AvatarSize} from './Avatar.types';

type StyledWithContent = {
  hasContent: boolean;
};

type StyledWithSize = {
  size: AvatarSize;
};

type StyledWithShowAvatar = {
  showAvatar: boolean;
};

const ImageSize = (size: AvatarSize): number =>
  ({
    sm: 24,
    md: 36,
    lg: 52,
    xl: 96,
  }[size]);

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const Root = styled(AnimatedPressable)<StyledWithContent>({
  flexDirection: 'row',
  alignItems: 'center',
});

const AvatarContainer = styled(View)<StyledWithSize>(
  ({theme: {colors}, size}) => ({
    minWidth: ImageSize(size),
    width: ImageSize(size),
    maxWidth: ImageSize(size),
    minHeight: ImageSize(size),
    height: ImageSize(size),
    maxHeight: ImageSize(size),
    borderRadius: 999,
    overflow: 'hidden',
    backgroundColor: colors.primary.base,
    alignItems: 'center',
    justifyContent: 'center',
  }),
);

const AvatarImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
  aspectRatio: 1,
}));

const AvatarIconContainer = styled(View)(() => ({
  position: 'absolute',
}));

const TextContainer = styled(Animated.View)<StyledWithShowAvatar>(
  ({theme: {spacings}, showAvatar}) => ({
    marginLeft: showAvatar ? spacings.sm : 0,
  }),
);

const LabelText = styled(Text)(() => ({
  lineHeight: 16,
  fontWeight: '800',
  textTransform: 'uppercase',
}));

const SubText = styled(Text)(({theme: {spacings}}) => ({
  marginTop: spacings.xxs,
  lineHeight: 12,
}));

export default {
  ImageSize,

  Root,

  AvatarContainer,
  AvatarImage,
  AvatarIconContainer,

  TextContainer,
  LabelText,
  SubText,
};
