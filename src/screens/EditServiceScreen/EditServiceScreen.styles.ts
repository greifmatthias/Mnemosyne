import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {Button, IconButton, Text, TextInput} from 'components';

const Root = styled(View)(() => ({
  flex: 1,
}));

const ContentContainer = styled(ScrollView)(() => ({}));

const Section = styled(View)(({theme: {colors, spacings}}) => ({
  paddingHorizontal: spacings.md,
  paddingTop: spacings.md,
  paddingBottom: spacings.xs,
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.primary.tint40,
}));

const HeaderText = styled(Text)(({theme: {spacings}}) => ({
  marginBottom: spacings.md,
}));

const AddressContainer = styled(View)(() => ({
  flexDirection: 'row',
}));

const Input = styled(TextInput)(({theme: {spacings}}) => ({
  flex: 1,
  marginBottom: spacings.md,
}));

const PortInput = styled(Input)(({theme: {spacings}}) => ({
  flex: 0,
  minWidth: 80,
  marginLeft: spacings.md,
}));

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

const AddButton = styled(IconButton)(({theme: {colors, spacings}}) => ({
  width: 56,
  height: 56,
  position: 'absolute',
  right: spacings.lg,
  bottom: spacings.lg,
  backgroundColor: colors.secondary.base,
}));

export default {
  Root,

  ContentContainer,
  Section,
  HeaderText,

  AddressContainer,
  Input,
  PortInput,

  HintText,

  AddManualButton,

  AddButton,
};
