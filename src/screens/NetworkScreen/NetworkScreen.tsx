import React, {FC, useLayoutEffect, useMemo} from 'react';
import {FadeInDown} from 'react-native-reanimated';

import {Lottie} from 'components';
import {useNetworkServices} from 'hooks';

import {LoadingScreen} from './LoadingScreen';
import S from './NetworkScreen.styles';
import {NetworkScreenProps} from './NetworkScreen.types';
import {ServiceItem} from './ServiceItem';

export const NetworkScreen: FC<NetworkScreenProps> = ({navigation}) => {
  const {services} = useNetworkServices();

  const hasServices = useMemo(() => !!Object.keys(services).length, [services]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => hasServices && <Lottie name="pulse" size="xs" />,
    });
  }, [navigation, hasServices]);

  if (!hasServices) return <LoadingScreen />;

  return (
    <S.Root>
      {Object.keys(services).map((x, index) => (
        <ServiceItem
          key={x}
          item={services[x]}
          entering={FadeInDown.delay(index * 100)}
        />
      ))}
    </S.Root>
  );
};
