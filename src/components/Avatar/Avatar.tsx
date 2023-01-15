import React, {FC} from 'react';

import {Icon} from 'components/Icon';

import S from './Avatar.styles';
import {AvatarProps} from './Avatar.types';

export const Avatar: FC<AvatarProps> = ({
  showAvatar = true,
  showLabel = true,
  avatar,
  label,
  sublabel,
  size = 'md',

  ...props
}) => {
  return (
    <S.Root hasContent={!!label || !!sublabel} {...props}>
      {showAvatar && (
        <S.AvatarContainer size={size}>
          {!!avatar ? (
            <S.AvatarImage source={avatar} />
          ) : (
            <S.AvatarIconContainer>
              <Icon name="user" />
            </S.AvatarIconContainer>
          )}
        </S.AvatarContainer>
      )}

      {showLabel && (
        <S.TextContainer showAvatar={showAvatar}>
          <S.LabelText variant={size === 'md' ? 'small' : 'extrasmall'}>
            {label || 'Someone'}
          </S.LabelText>

          {!!sublabel && <S.SubText variant="extrasmall">{sublabel}</S.SubText>}
        </S.TextContainer>
      )}
    </S.Root>
  );
};
