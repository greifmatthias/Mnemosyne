import {useTheme} from '@emotion/react';
import React, {FC, useCallback} from 'react';
import {FadeInDown} from 'react-native-reanimated';
import {Service} from 'react-native-zeroconf';

import {useAppContext} from 'context';

import S from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';
import {ServiceItem} from './ServiceItem';

export const HomeScreen: FC<HomeScreenProps> = ({navigation}) => {
  const {colors} = useTheme();
  const {services} = useAppContext();

  const onItemPress = useCallback(
    (service: Partial<Service>) => {
      if (service.host) navigation.navigate('NetworkScreen', {service});
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
            key={x.host}
            item={x}
            onPress={() => onItemPress(x)}
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
