import React, {FC} from 'react';
import {ViewProps} from 'react-native';

import {useColor} from 'context';

import S from './Card.styles';
import {CardProps} from './Card.types';

export const Card: FC<CardProps> = ({
  entering,
  exiting,
  style,
  contentStyle,

  onPress,

  ...props
}) => {
  const animatedProps = {entering, exiting, style};

  const rippleColor = useColor(`primary.shade20`);

  return !!onPress ? (
    <S.Root {...animatedProps}>
      <S.PressableRoot
        onPress={onPress}
        android_ripple={{color: rippleColor}}
        style={contentStyle}
        {...props}
      />
    </S.Root>
  ) : (
    <S.Root {...animatedProps} {...(props as ViewProps)} />
  );
};
