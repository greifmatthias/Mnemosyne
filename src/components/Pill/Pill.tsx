import {useTheme} from '@emotion/react';
import {merge} from 'lodash';
import React, {FC, useMemo} from 'react';
import {View} from 'react-native';

import {Icon} from 'components/Icon';

import S from './Pill.styles';
import {PillProps} from './Pill.types';

export const Pill: FC<PillProps> = ({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  textProps,
  children,
  style,
  android_ripple,
  onPress,
  isSelected = false,

  ...props
}) => {
  const theme = useTheme();

  const textStyle = merge(
    {},
    S.variantStyleForText(theme, variant),
    S.sizeStyleForText(theme, size),
    textProps,
  );

  const iconSize = S.iconSizeForSize(size);

  const childRender =
    typeof children === 'string' ? (
      children !== '' ? (
        <S.LabelText
          size={size}
          hasIcon={!!iconLeft || !!iconRight}
          {...textStyle}>
          {children.toString()}
        </S.LabelText>
      ) : null
    ) : (
      children
    );

  const PressableComponent: any = useMemo(
    () => (!!onPress ? S.PressableRoot : S.NotPressableRoot),
    [onPress],
  );

  return (
    <S.Root variant={variant} isSelected={isSelected} style={style}>
      <PressableComponent
        variant={variant}
        size={size}
        isSelected={isSelected}
        android_ripple={merge(
          {
            color:
              (theme.colors as any)[variant]?.shade20 ||
              theme.colors.neutral.neutral20,
            borderless: true,
          },
          android_ripple,
        )}
        onPress={onPress}
        {...props}>
        {iconLeft ? (
          <Icon color={textStyle.color} size={iconSize} {...iconLeft} />
        ) : (
          <View />
        )}

        {childRender}

        {iconRight ? (
          <Icon color={textStyle.color} size={iconSize} {...iconRight} />
        ) : (
          <View />
        )}
      </PressableComponent>
    </S.Root>
  );
};
