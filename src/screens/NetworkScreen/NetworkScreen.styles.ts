import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {Button, IconButton, Text} from 'components';

const AddIconButton = styled(IconButton)(({theme: {spacings}}) => ({
  marginRight: spacings.md,
}));

const LoadingRoot = styled(View)(({theme: {colors}}) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.primary.tint40,
}));

const Root = styled(View)(() => ({
  flex: 1,
}));

const ContentContainer = styled(ScrollView)(() => ({}));

const HintText = styled(Text)(({theme: {spacings}}) => ({
  width: '80%',
  maxWidth: 280,
  marginTop: spacings.lg,
  textAlign: 'center',
}));

const AddManualButton = styled(Button)(({theme: {spacings}}) => ({
  alignSelf: 'center',
  position: 'absolute',
  bottom: spacings.xl,
}));

export default {
  AddIconButton,

  LoadingRoot,
  Root,
  ContentContainer,

  HintText,

  AddManualButton,
};
