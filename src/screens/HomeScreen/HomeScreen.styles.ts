import styled from '@emotion/native';
import {ScrollView, View} from 'react-native';

import {IconButton} from 'components';

const Root = styled(View)(() => ({
  flex: 1,
}));

const ContentContainer = styled(ScrollView)(() => ({}));

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

  AddButton,
};
