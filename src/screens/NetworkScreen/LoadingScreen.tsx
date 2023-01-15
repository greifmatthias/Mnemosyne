import React, {FC} from 'react';

import {Lottie} from 'components';

import S from './NetworkScreen.styles';

export const LoadingScreen: FC = () => {
  return (
    <S.LoadingRoot>
      <Lottie name="pulse" size="xl" />

      <S.HintText variant="small">
        Looking for services in your LAN, make sure you are connected to the
        same network as the service you want to use
      </S.HintText>
    </S.LoadingRoot>
  );
};
