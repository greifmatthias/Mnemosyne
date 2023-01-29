import React, {
  FC,
  useCallback,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import {FadeInDown} from 'react-native-reanimated';
import {Service} from 'react-native-zeroconf';

import {Lottie, ServiceItem} from 'components';
import {useNetworkServices} from 'hooks';

import {LoadingScreen} from './LoadingScreen';
import S from './NetworkScreen.styles';
import {NetworkScreenProps} from './NetworkScreen.types';

export const NetworkScreen: FC<NetworkScreenProps> = ({navigation}) => {
  const {services} = useNetworkServices({
    // isTest: true,
  });

  const [openedService, setOpenedService] = useState<string>(() => '');

  const hasServices = useMemo(() => !!Object.keys(services).length, [services]);

  const onSavePress = useCallback(
    (service?: Partial<Service>) => {
      navigation.navigate('EditServiceScreen', {service});
    },
    [navigation],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <S.AddIconButton
            iconProps={{name: 'plus-circle-outline'}}
            onPress={() => onSavePress()}
          />

          {hasServices && <Lottie name="pulse" size="xs" />}
        </>
      ),
    });
  }, [navigation, hasServices, onSavePress]);

  const onItemPress = useCallback((service: Partial<Service>) => {
    setOpenedService(y => (service?.host === y ? '' : service?.host || ''));
  }, []);

  const onConnectPress = useCallback(
    (service: Partial<Service>) => {
      if (service.host)
        navigation.navigate('DirScreen', {
          service: {
            service: {
              ...service,
              port: 445,
            },
          },
        });
    },
    [navigation],
  );

  const onManualPress = useCallback(
    () => navigation.navigate('EditServiceScreen'),
    [navigation],
  );

  if (!hasServices) return <LoadingScreen onManualPress={onManualPress} />;

  return (
    <S.Root>
      <S.ContentContainer>
        {Object.keys(services).map((x, index) => (
          <ServiceItem
            key={x}
            item={{service: services[x]}}
            isOpen={openedService === services[x].host}
            editMode="save"
            onPress={() => onItemPress(services[x])}
            onEditPress={() => onSavePress(services[x])}
            onConnectPress={() => onConnectPress(services[x])}
            entering={FadeInDown.delay(index * 100)}
          />
        ))}
      </S.ContentContainer>
    </S.Root>
  );
};
