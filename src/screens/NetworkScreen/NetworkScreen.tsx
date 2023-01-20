import React, {FC, useCallback, useLayoutEffect, useMemo} from 'react';
import {FadeInDown} from 'react-native-reanimated';
import {Service} from 'react-native-zeroconf';

import {Lottie} from 'components';
import {useNetworkServices} from 'hooks';

import {LoadingScreen} from './LoadingScreen';
import S from './NetworkScreen.styles';
import {NetworkScreenProps} from './NetworkScreen.types';
import {ServiceItem} from './ServiceItem';

export const NetworkScreen: FC<NetworkScreenProps> = ({navigation}) => {
  const {services} = useNetworkServices({
    // isTest: true
  });

  const hasServices = useMemo(() => !!Object.keys(services).length, [services]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => hasServices && <Lottie name="pulse" size="xs" />,
    });
  }, [navigation, hasServices]);

  const onItemPress = useCallback(
    (service: Partial<Service>) => {
      if (service.host) navigation.navigate('DirScreen', {service});
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
            item={services[x]}
            onPress={() => onItemPress(services[x])}
            entering={FadeInDown.delay(index * 100)}
          />
        ))}
      </S.ContentContainer>
    </S.Root>
  );
};
