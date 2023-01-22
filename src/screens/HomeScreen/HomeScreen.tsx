import {useTheme} from '@emotion/react';
import React, {FC, useCallback, useState} from 'react';
import {FadeInDown} from 'react-native-reanimated';

import {ServiceItem} from 'components';
import {useAppContext} from 'context';
import {ConnectService} from 'types';

import S from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const {services} = useAppContext();

  const [openedService, setOpenedService] = useState<string>(() => '');

  const onItemPress = useCallback(({service}: Partial<ConnectService>) => {
    setOpenedService(y => (service?.host === y ? '' : service?.host || ''));
  }, []);

  const onConnectPress = useCallback(
    ({service}: Partial<ConnectService>) => {
      if (service?.host) navigation.navigate('DirScreen', {service});
    },
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
            key={x.service.host}
            item={x}
            isOpen={x.service.host === openedService}
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
