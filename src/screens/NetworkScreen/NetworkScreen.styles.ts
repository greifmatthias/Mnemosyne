import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {Button, Lottie, Text} from 'components';

const HeaderContainer = styled(View)(() => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

const SearchLottie = styled(Lottie)(({theme: {spacings}}) => ({
  marginLeft: spacings.xxs,
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
  marginTop: spacings.xxl,
  textAlign: 'center',
}));

const AddManualButton = styled(Button)(({theme: {spacings}}) => ({
  alignSelf: 'center',
  position: 'absolute',
  bottom: spacings.xl,
}));

export default {
  HeaderContainer,
  SearchLottie,

  LoadingRoot,
  Root,
  ContentContainer,

  HintText,

  AddManualButton,
};
