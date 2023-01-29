import {useTheme} from '@emotion/react';
import React, {FC} from 'react';
import {FadeInDown} from 'react-native-reanimated';

import {Lottie} from 'components';

import S from './NetworkScreen.styles';

type LoadingScreenProps = {
  onManualPress: () => void;
};

export const LoadingScreen: FC<LoadingScreenProps> = ({onManualPress}) => {
  const {colors} = useTheme();

  return (
    <S.LoadingRoot>
      <Lottie name="pulse" size="xl" />

      <S.HintText variant="small">
        Looking for services in your LAN, make sure you are connected to the
        same network as the service you want to use. Or connect to one manually.
      </S.HintText>

      <S.AddManualButton
        iconLeft={{name: 'plus-circle-outline'}}
        onPress={onManualPress}
        android_ripple={{color: colors.primary.shade10}}
        entering={FadeInDown}>
        Connect manually
      </S.AddManualButton>
    </S.LoadingRoot>
  );
};
