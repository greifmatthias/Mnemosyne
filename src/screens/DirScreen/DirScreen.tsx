import {useTheme} from '@emotion/react';
import React, {FC, useLayoutEffect, useMemo, useState} from 'react';
import {FadeInDown, FadeInUp, FadeOutUp} from 'react-native-reanimated';

import {FileItem as TFileItem, useSmbClient} from 'hooks';

import S from './DirScreen.styles';
import {DirScreenParams, DirScreenProps} from './DirScreen.types';
import {FileItem} from './FileItem';

export const DirScreen: FC<DirScreenProps> = ({navigation, route}) => {
  const {service} = route.params ? route.params : DirScreenParams.getDefault();

  const {colors} = useTheme();

  const [path, setPath] = useState<string>(() => '');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: service?.name,
    });
  }, [navigation, service]);

  const {files} = useSmbClient({
    ip: service?.host,
    sharedFolder: 'Data',
    username: 'me',
    password: '0889',
    path,
    // isTest: true,
  });

  const filesWhitoutItselfAndBack = useMemo(
    () => files.filter(x => !['.', '..'].includes(x.name)),
    [files],
  );

  if (!service) return null;

  const onItemPress = (item: TFileItem) => {
    if (item.isDirectory) setPath(x => `${x}/${item.name}`);
  };

  return (
    <S.Root>
      {!!path && (
        <S.PathContainer
          numberOfLines={1}
          entering={FadeInUp}
          exiting={FadeOutUp}>
          {path}
        </S.PathContainer>
      )}

      <S.Content>
        {filesWhitoutItselfAndBack.map((x, index) => (
          <FileItem
            key={x.name}
            item={x}
            entering={FadeInDown.delay(index * 100)}
            onPress={() => onItemPress(x)}
          />
        ))}
      </S.Content>

      <S.UploadButton
        accessibilityLabel="Upload new file"
        iconProps={{name: 'upload-outline'}}
        entering={FadeInDown}
        android_ripple={{color: colors.secondary.shade10}}
      />
    </S.Root>
  );
};
