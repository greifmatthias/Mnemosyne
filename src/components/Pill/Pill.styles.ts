import styled from '@emotion/native';
import {Theme} from '@emotion/react';
import {Pressable, View} from 'react-native';

import {IconSize} from 'components/Icon';
import {Text, TextProps, TextVariant} from 'components/Text';
import {Color} from 'theme';

import {PillSize, PillVariant} from './Pill.types';

type StyledButtonVariant = {
  variant: PillVariant;
};

type StyledButtonSize = {
  size: PillSize;
};

type StyledSelected = {
  isSelected: boolean;
};

type StyledWithIcons = {
  hasIcon: boolean;
};

const iconSizeForSize = (size: PillSize): IconSize =>
  ({
    sm: 'xs' as IconSize,
    md: 'sm' as IconSize,
    lg: 'md' as IconSize,
  }[size]);

const variantStyleForText = ({}: Theme, variant: PillVariant): TextProps =>
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

const sizeStyleForText = ({}: Theme, size: PillSize): TextProps =>
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

const variantStyle = (
  {colors}: Theme,
  variant: PillVariant,
  isSelected: boolean,
) =>
  ({
    primary: {
      true: {
        backgroundColor: colors.primary.base,
      },
      false: {
        backgroundColor: colors.primary.tint40,
      },
    },
    secondary: {
      true: {
        backgroundColor: colors.neutral.neutral20,
      },
      false: {
        backgroundColor: colors.neutral.neutral05,
      },
    },
    outlined: {
      true: {
        borderWidth: 1,
        borderColor: colors.primary.shade20,
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
    none: {
      true: {
        backgroundColor: 'transparent',
      },
      false: {
        backgroundColor: 'transparent',
      },
    },
  }[variant][isSelected ? 'true' : 'false']);

const sizeStyle = ({spacings}: Theme, size: PillSize) =>
  ({
    sm: {
      paddingVertical: spacings.xxs,
      paddingHorizontal: spacings.xs,
    },
    md: {
      paddingVertical: spacings.sm,
      paddingHorizontal: spacings.md,
    },
    lg: {
      padding: spacings.sm,
    },
  }[size]);

const iconSpacing = ({spacings}: Theme, size: PillSize) =>
  ({
    sm: spacings.xs,
    md: spacings.sm,
    lg: spacings.md,
  }[size]);

const Root = styled(View)<StyledButtonVariant & StyledSelected>(
  ({theme, variant, isSelected}) => ({
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderRadius: 999,
    overflow: 'hidden',

    ...variantStyle(theme, variant, isSelected),
  }),
);

const PressableRoot = styled(Pressable)<
  StyledButtonVariant & StyledButtonSize & StyledSelected
>(({theme, variant, size, isSelected}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

  ...sizeStyle(theme, size),
}));

const NotPressableRoot = styled(PressableRoot)<
  StyledButtonVariant & StyledButtonSize & StyledSelected
>(({theme, variant, size, isSelected}) => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',

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
