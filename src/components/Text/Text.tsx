import React, {FC} from 'react';

import {useColor} from 'context';

import S from './Text.styles';
import {TextProps} from './Text.types';

export const Text: FC<TextProps> = ({
  variant = 'base',
  color = 'text',

  ...props
}) => {
  const textColor = useColor(color);

  return <S.Root variant={variant} nativeColor={textColor!} {...props} />;
};
