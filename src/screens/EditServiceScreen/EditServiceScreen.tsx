import {useTheme} from '@emotion/react';
import React, {FC, useCallback, useState} from 'react';
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

  const {addService} = useService();
  const {colors} = useTheme();

  const [name, setName] = useState<string>(() => service?.name || '');
  const [host, setHost] = useState<string>(() => service?.host || '');
  const [port, setPort] = useState<string>(() => '445');
  const [folder, setFolder] = useState<string>(() => '');
  const [username, setUsername] = useState<string>(() => '');
  const [password, setPassword] = useState<string>(() => '');

  const onSavePress = useCallback(() => {
    const newService: ConnectService = {
      id: uuid.v4().toString(),
      service: {
        name,
        host,
        port: +port,
      },
      folder,
      username,
      password,
    };

    addService(newService);

    navigation.navigate<any>('HomeScreen', {selectedService: newService});
  }, [navigation, addService, name, host, port, folder, username, password]);

  return (
    <S.Root>
      <S.ContentContainer>
        <S.Section>
          <S.HeaderText variant="lgbutton">Service</S.HeaderText>

          <S.Input
            title="Name"
            value={name}
            onChange={e => setName(e.nativeEvent.text.trim())}
          />

          <S.AddressContainer>
            <S.Input
              title="Ip address"
              value={host}
              onChange={e => setHost(e.nativeEvent.text.trim())}
            />
            <S.PortInput
              title="Port"
              value={port.toString()}
              onChange={e => setPort(e.nativeEvent.text.trim())}
            />
          </S.AddressContainer>

          <S.Input
            title="Shared folder"
            value={folder}
            onChange={e => setFolder(e.nativeEvent.text.trim())}
          />
        </S.Section>

        <S.Section>
          <S.HeaderText variant="lgbutton">Authentication</S.HeaderText>

          <S.Input
            title="Username"
            value={username}
            onChange={e => setUsername(e.nativeEvent.text.trim())}
          />
          <S.Input
            title="Password"
            value={password}
            onChange={e => setPassword(e.nativeEvent.text.trim())}
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
