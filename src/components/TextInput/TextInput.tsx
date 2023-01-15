import colorAlpha from 'color-alpha';
import React, {FC} from 'react';

import {useColor} from 'context';

import S from './TextInput.styles';
import {TextInputProps} from './TextInput.types';

export const TextInput: FC<TextInputProps> = ({
  title,
  style,
  textInputStyle,
  multiline,

  ...props
}) => {
  const placeholderColor = useColor('text');
  const selectionColor = useColor('primary.shade20');

  return (
    <S.Root style={style}>
      {!!title && <S.TitleText variant="extrasmall">{title}</S.TitleText>}

      <S.InputElement
        textAlignVertical={multiline ? 'top' : 'center'}
        placeholderTextColor={colorAlpha(placeholderColor!, 0.65)}
        selectionColor={selectionColor}
        style={textInputStyle}
        {...props}
      />
    </S.Root>
  );
};
