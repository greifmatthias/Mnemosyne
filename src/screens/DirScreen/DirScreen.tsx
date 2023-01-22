import {useTheme} from '@emotion/react';
import React, {FC, useLayoutEffect, useMemo, useState} from 'react';
import {FadeInDown, FadeInUp, FadeOutUp} from 'react-native-reanimated';

import {IconButton} from 'components';
import {FileItem as TFileItem, useSmbClient} from 'hooks';

import S from './DirScreen.styles';
import {DirScreenParams, DirScreenProps} from './DirScreen.types';
import {FileItem} from './FileItem';

export const DirScreen: FC<DirScreenProps> = ({navigation, route}) => {
  const {service} = route.params ? route.params : DirScreenParams.getDefault();

  const {colors} = useTheme();

  const [path, setPath] = useState<string>(() => '');
  const [showHidden, setShowHidden] = useState<boolean>(() => false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: service?.service.name,
    });
  }, [navigation, service]);

  const {files} = useSmbClient({
    ip: service?.service.host,
    sharedFolder: service?.folder,
    username: service?.username,
    password: service?.password,
    path,
    // isTest: true,
  });

  const filteredFiles = useMemo(() => {
    const output = (files || []).filter(x => !['.', '..'].includes(x.name));

    if (showHidden) return output;

    return output.filter(x => !x.name.startsWith('.'));
  }, [files, showHidden]);

  if (!service) return null;

  const onBackPress = () =>
    setPath(x => {
      const dirs = x.split('/').filter(y => !!y);

      dirs.pop();

      const newPath = `${dirs.join('/')}/`;

      return newPath === '/' ? '' : newPath;
    });

  const onItemPress = (item: TFileItem) => {
    if (item.isDirectory) setPath(x => `${x}${item.name}/`);
  };

  return (
    <S.Root>
      {!!path && (
        <S.HeaderContainer>
          <IconButton
            iconProps={{name: 'arrow-left-circle-outline'}}
            onPress={onBackPress}
          />

          <S.PathContainer
            numberOfLines={1}
            entering={FadeInUp}
            exiting={FadeOutUp}>
            {path}
          </S.PathContainer>
        </S.HeaderContainer>
      )}

      <S.Content>
        {filteredFiles.map((x, index) => (
          <FileItem
            key={x.name}
            item={x}
            entering={FadeInDown.delay(index * 50)}
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
