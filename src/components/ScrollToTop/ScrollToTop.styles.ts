import styled from '@emotion/native';

import {Button} from 'components/Button';

const Root = styled(Button)(({theme: {colors, spacings}}) => ({
  position: 'absolute',
  elevation: 2,
  alignSelf: 'center',
  bottom: spacings.md,
  backgroundColor: colors.primary.tint40,
  borderRadius: 999,
  overflow: 'hidden',
}));

export default {
  Root,
};
