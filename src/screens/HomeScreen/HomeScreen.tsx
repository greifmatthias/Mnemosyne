import {useTheme} from '@emotion/react';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {FadeInDown} from 'react-native-reanimated';

import {ServiceItem} from 'components';
import {useService} from 'context';
import {ConnectService} from 'types';

import S from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

export const HomeScreen: FC<HomeScreenProps> = ({navigation, route}) => {
  const {colors} = useTheme();
  const {services} = useService();

  const [openedService, setOpenedService] = useState<string>(() => '');

  useEffect(() => {
    if (route.params?.selectedService)
      setOpenedService(route.params.selectedService.id);
  }, [route.params]);

  const onItemPress = useCallback(({id}: ConnectService) => {
    setOpenedService(y => (id === y ? '' : id));
  }, []);

  const onConnectPress = useCallback(
    (service: ConnectService) =>
      navigation.navigate<any>('DirScreen', {service}),
    [navigation],
  );

  const onAddPress = useCallback(
    () => navigation.navigate('NetworkScreen'),
    [navigation],
  );

  return (
    <S.Root>
      <S.ContentContainer>
        {services.map((x, index) => (
          <ServiceItem
            key={x.id}
            item={x}
            isOpen={x.id === openedService}
            onPress={() => onItemPress(x)}
            onConnectPress={() => onConnectPress(x)}
            entering={FadeInDown.delay(index * 100)}
          />
        ))}
      </S.ContentContainer>

      <S.AddButton
        accessibilityLabel="Add new service"
        iconProps={{name: 'plus'}}
        onPress={onAddPress}
        entering={FadeInDown}
        android_ripple={{color: colors.secondary.shade10}}
      />
    </S.Root>
  );
};
