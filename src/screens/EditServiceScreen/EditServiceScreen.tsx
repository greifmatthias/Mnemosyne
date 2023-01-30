import {useTheme} from '@emotion/react';
import React, {FC, useCallback, useLayoutEffect, useState} from 'react';
import {FadeInDown} from 'react-native-reanimated';
import uuid from 'react-native-uuid';

import {useService} from 'context';
import {ConnectService} from 'types';

import S from './EditServiceScreen.styles';
import {
  EditServiceScreenParams,
  EditServiceScreenProps,
} from './EditServiceScreen.types';

export const EditServiceScreen: FC<EditServiceScreenProps> = ({
  navigation,
  route,
}) => {
  const {service} = route.params
    ? route.params
    : EditServiceScreenParams.getDefault();

  const {add, edit} = useService();
  const {colors} = useTheme();

  const [name, setName] = useState<string>(() => service?.name || '');
  const [host, setHost] = useState<string>(() => service?.host || '');
  const [port, setPort] = useState<string>(() => '445');
  const [folder, setFolder] = useState<string>(() => service?.folder || '');
  const [username, setUsername] = useState<string>(
    () => service?.username || '',
  );
  const [password, setPassword] = useState<string>(
    () => service?.password || '',
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: service ? 'Edit service' : 'Add service',
    });
  }, [navigation, service]);

  const onSavePress = useCallback(() => {
    if (!!name && !!host && !!folder) {
      const newService: ConnectService = {
        id: service?.id || uuid.v4().toString(),
        name: name.trim(),
        host: host.trim(),
        port: +port.trim(),
        folder: folder.trim(),
        username: username.trim(),
        password,
      };

      if (service?.id) edit(newService);
      else add(newService);

      navigation.navigate<any>('HomeScreen', {selectedService: newService});
    }
  }, [
    navigation,
    add,
    edit,
    service,
    name,
    host,
    port,
    folder,
    username,
    password,
  ]);

  return (
    <S.Root>
      <S.ContentContainer>
        <S.Section>
          <S.HeaderText variant="lgbutton">Service</S.HeaderText>

          <S.Input
            title="Name"
            value={name}
            onChange={e => setName(e.nativeEvent.text)}
          />

          <S.AddressContainer>
            <S.Input
              title="Ip address"
              value={host}
              onChange={e => setHost(e.nativeEvent.text)}
            />
            <S.PortInput
              title="Port"
              value={port.toString()}
              onChange={e => setPort(e.nativeEvent.text)}
            />
          </S.AddressContainer>

          <S.Input
            title="Shared folder"
            value={folder}
            onChange={e => setFolder(e.nativeEvent.text)}
          />
        </S.Section>

        <S.Section>
          <S.HeaderText variant="lgbutton">Authentication</S.HeaderText>

          <S.Input
            title="Username"
            value={username}
            onChange={e => setUsername(e.nativeEvent.text)}
          />
          <S.Input
            title="Password"
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
        </S.Section>
      </S.ContentContainer>

      <S.AddButton
        accessibilityLabel="Add new service"
        iconProps={{name: 'save-outline'}}
        onPress={onSavePress}
        entering={FadeInDown}
        android_ripple={{color: colors.secondary.shade10}}
      />
    </S.Root>
  );
};
