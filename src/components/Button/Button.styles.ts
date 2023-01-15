import styled from '@emotion/native';
import {Theme} from '@emotion/react';
import {Pressable, View} from 'react-native';
import Animated from 'react-native-reanimated';

import {IconSize} from 'components/Icon';
import {Text, TextProps, TextVariant} from 'components/Text';
import {Color} from 'theme';

import {ButtonSize, ButtonVariant} from './Button.types';

type StyledButtonVariant = {
  variant: ButtonVariant;
};

type StyledButtonSize = {
  size: ButtonSize;
};

type StyledWithIcons = {
  hasIcon: boolean;
};

const iconSizeForSize = (size: ButtonSize): IconSize =>
  ({
    sm: 'xs' as IconSize,
    md: 'sm' as IconSize,
    lg: 'md' as IconSize,
  }[size]);

const variantStyleForText = ({}: Theme, variant: ButtonVariant): TextProps =>
  ({
    primary: {
      color: 'text' as Color,
    },
    secondary: {
      color: 'text' as Color,
    },
    outlined: {
      color: 'text' as Color,
    },
    none: {
      color: 'text' as Color,
    },
  }[variant]);

const sizeStyleForText = ({}: Theme, size: ButtonSize): TextProps =>
  ({
    sm: {
      variant: 'smbutton' as TextVariant,
    },
    md: {
      variant: 'mdbutton' as TextVariant,
    },
    lg: {
      variant: 'lgbutton' as TextVariant,
    },
  }[size]);

const variantStyle = ({colors, shapes}: Theme, variant: ButtonVariant) =>
  ({
    primary: {},
    secondary: {},
    outlined: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.neutral.neutral00,
      borderRadius: shapes.md,
    },
    none: {
      backgroundColor: 'transparent',
    },
  }[variant]);

const sizeStyle = ({spacings}: Theme, size: ButtonSize) =>
  ({
    sm: {
      paddingVertical: spacings.xs,
      paddingHorizontal: spacings.xs,
    },
    md: {
      paddingVertical: spacings.sm,
      paddingHorizontal: spacings.md,
    },
    lg: {
      padding: spacings.md,
    },
  }[size]);

const iconSpacing = ({spacings}: Theme, size: ButtonSize) =>
  ({
    sm: spacings.xs,
    md: spacings.sm,
    lg: spacings.md,
  }[size]);

const Root = styled(Animated.View)<StyledButtonVariant>(
  ({theme: {colors}, variant}) => ({
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 999,
    backgroundColor: (colors as any)[variant]?.base,
    overflow: 'hidden',
  }),
);

const PressableRoot = styled(Pressable)<StyledButtonVariant & StyledButtonSize>(
  ({theme, variant, size}) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    ...variantStyle(theme, variant),
    ...sizeStyle(theme, size),
  }),
);

const NotPressableRoot = styled(PressableRoot)<
  StyledButtonVariant & StyledButtonSize
>(({theme, variant, size}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  ...variantStyle(theme, variant),
  ...sizeStyle(theme, size),
})).withComponent(View);

const LabelText = styled(Text)<StyledButtonSize & StyledWithIcons>(
  ({theme, size, hasIcon}) => ({
    paddingHorizontal: hasIcon ? iconSpacing(theme, size) : 0,
  }),
);

export default {
  iconSizeForSize,
  variantStyle,
  sizeStyle,
  variantStyleForText,
  sizeStyleForText,
  iconSpacing,

  Root,
  PressableRoot,
  NotPressableRoot,

  LabelText,
};
