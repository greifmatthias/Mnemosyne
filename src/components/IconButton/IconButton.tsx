import React, {FC} from 'react';

import {Icon} from 'components/Icon';
import {useColor} from 'context';

import S from './IconButton.styles';
import {IconButtonProps} from './IconButton.types';

export const IconButton: FC<IconButtonProps> = ({
  entering,
  exiting,
  style,

  iconProps,
  children,

  ...props
}) => {
  const animatedProps = {entering, exiting, style};

  const rippleColor = useColor('neutral.neutral80');

  const childRender = children ? children : <Icon {...iconProps} />;

  return (
    <S.Root {...animatedProps}>
      <S.PressableRoot android_ripple={{color: rippleColor}} {...props}>
        {childRender}
      </S.PressableRoot>
    </S.Root>
  );
};
