import {useTheme} from '@emotion/react';
import {Icon, Text} from 'components';
import {FC} from 'react';

import S from './ServiceItem.styles';
import {ServiceItemProps} from './ServiceItem.types';

export const ServiceItem: FC<ServiceItemProps> = ({item, ...props}) => {
  const {
    colors: {neutral},
  } = useTheme();

  return (
    <S.Root
      {...props}
      android_ripple={{
        color: neutral.neutral10,
      }}>
      <Icon name="cube-outline" size="lg" />

      <S.DetailContainer>
        <Text variant="lgbutton">{item.name}</Text>
        <Text variant="small">
          {item.host}:{item.port}
        </Text>
      </S.DetailContainer>
    </S.Root>
  );
};
