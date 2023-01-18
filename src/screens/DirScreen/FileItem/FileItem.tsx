import {useTheme} from '@emotion/react';
import React, {FC} from 'react';

import {Icon, Text} from 'components';

import S from './FileItem.styles';
import {FileItemProps} from './FileItem.types';

export const FileItem: FC<FileItemProps> = ({item, ...props}) => {
  const {
    colors: {neutral},
  } = useTheme();

  return (
    <S.Root
      {...props}
      android_ripple={{
        color: neutral.neutral10,
      }}>
      <Icon name={item.isDirectory ? 'folder-outline' : 'file-outline'} />

      <S.DetailContainer>
        <Text>{item.name}</Text>
      </S.DetailContainer>
    </S.Root>
  );
};
