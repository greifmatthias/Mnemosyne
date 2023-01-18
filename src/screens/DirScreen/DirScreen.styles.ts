import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {IconButton, Text} from 'components';

const LoadingRoot = styled(View)(({theme: {colors}}) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.primary.tint40,
}));

const Root = styled(View)(() => ({
  flex: 1,
}));

const PathContainer = styled(Text)(({theme: {colors, spacings}}) => ({
  padding: spacings.md,
  backgroundColor: colors.primary.tint40,
}));

const Content = styled(ScrollView)(() => ({}));

const UploadButton = styled(IconButton)(({theme: {colors, spacings}}) => ({
  width: 56,
  height: 56,
  position: 'absolute',
  right: spacings.lg,
  bottom: spacings.lg,
  backgroundColor: colors.secondary.base,
}));

export default {
  LoadingRoot,
  Root,

  PathContainer,

  Content,

  UploadButton,
};
