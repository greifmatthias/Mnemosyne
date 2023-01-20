import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {Button, Text} from 'components';

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
  Root,
  ContentContainer,

  HintText,

  AddManualButton,
};
