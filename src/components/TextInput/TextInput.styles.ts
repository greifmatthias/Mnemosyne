import styled from '@emotion/native';
import {TextInput} from 'react-native';
import Animated from 'react-native-reanimated';

import {Text} from 'components/Text';

const Root = styled(Animated.View)(() => ({}));

const TitleText = styled(Text)(({theme: {spacings}}) => ({
  marginBottom: spacings.xs,
}));

const InputElement = styled(TextInput)(
  ({theme: {colors, shapes, spacings}}) => ({
    flex: 1,
    color: colors.text,
    backgroundColor: colors.primary.tint40,
    borderRadius: shapes.sm,
    paddingLeft: spacings.sm,
  }),
);

export default {
  Root,

  TitleText,
  InputElement,
};
