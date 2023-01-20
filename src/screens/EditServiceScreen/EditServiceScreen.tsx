import React, {FC} from 'react';

import {Text} from 'components';

import S from './EditServiceScreen.styles';
import {EditServiceScreenProps} from './EditServiceScreen.types';

export const EditServiceScreen: FC<EditServiceScreenProps> = () => {
  return (
    <S.Root>
      <S.ContentContainer>
        <Text>Edit screen</Text>
      </S.ContentContainer>
    </S.Root>
  );
};
