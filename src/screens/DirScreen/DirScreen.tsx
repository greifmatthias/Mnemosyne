import {useTheme} from '@emotion/react';
import React, {FC, useLayoutEffect, useMemo, useState} from 'react';
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutUp,
} from 'react-native-reanimated';

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
      headerTitle: service?.name,
    });
  }, [navigation, service]);

  const {files: serverfiles} = useSmbClient({
    ip: service?.host,
    port: service?.port?.toString(),
    sharedFolder: service?.folder,
    username: service?.username,
    password: service?.password,
    path,
    // isTest: true,
  });

  const groupedFiles = useMemo(() => {
    const filesWithoutNav = (serverfiles || []).filter(
      x => !['.', '..'].includes(x.name),
    );

    const hiddenOutput = showHidden
      ? filesWithoutNav
      : filesWithoutNav.filter(x => !x.hidden);

    const output: {files: Array<TFileItem>; folders: Array<TFileItem>} = {
      folders: [],
      files: [],
    };

    hiddenOutput.forEach(x => {
      if (x.isDirectory) output.folders.push(x);
      else output.files.push(x);
    });

    return output;
  }, [serverfiles, showHidden]);

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
        {Object.keys(groupedFiles).map((x, xindex) => {
          const overIndex =
            (groupedFiles as any)[Object.keys(groupedFiles)[xindex - 1]]
              ?.length || 0;

          return (
            !!(groupedFiles as any)[x].length && (
              <Animated.View key={x}>
                <S.GroupText
                  variant="mdbutton"
                  entering={FadeInDown.delay(overIndex * 50)}>
                  {x}
                </S.GroupText>

                {(groupedFiles as any)[x].map((y: TFileItem, index: number) => (
                  <FileItem
                    key={y.name}
                    item={y}
                    entering={FadeInDown.delay(overIndex + index * 50)}
                    onPress={() => onItemPress(y)}
                  />
                ))}
              </Animated.View>
            )
          );
        })}
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
