import styled from '@emotion/native';
import {TextStyle} from 'react-native';
import Animated from 'react-native-reanimated';

import {TextVariant} from './Text.types';

type StyledText = {
  nativeColor: string;
  variant: TextVariant;
};

const styles: Record<TextVariant, TextStyle> = {
  base: {
    fontSize: 16,
    lineHeight: 22,
  },
  small: {
    fontSize: 14,
    lineHeight: 19,
  },
  extrasmall: {
    fontSize: 12,
    lineHeight: 16,
  },
  heading1: {
    fontSize: 80,
    lineHeight: 90,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heading2: {
    fontSize: 40,
    lineHeight: 48,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heading3: {
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heading4: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heading5: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  heading6: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  smbutton: {
    fontSize: 12,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  mdbutton: {
    fontSize: 14,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
  lgbutton: {
    fontSize: 16,
    fontWeight: '800',
    textTransform: 'uppercase',
  },
};

const Root = styled(Animated.Text)<StyledText>(({nativeColor, variant}) => ({
  color: nativeColor,

  ...styles[variant],
}));

export default {
  Root,
};
