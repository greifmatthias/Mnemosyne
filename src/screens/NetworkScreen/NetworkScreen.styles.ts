import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {Text} from 'components';

const LoadingRoot = styled(View)(({theme: {colors}}) => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: colors.primary.tint40,
}));

const Root = styled(ScrollView)(() => ({}));

const HintText = styled(Text)(({theme: {spacings}}) => ({
  width: '80%',
  maxWidth: 280,
  marginTop: spacings.lg,
  textAlign: 'center',
}));

export default {
  LoadingRoot,
  Root,

  HintText,
};
