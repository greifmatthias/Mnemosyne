import {AnimateProps} from 'react-native-reanimated';
import {Service} from 'react-native-zeroconf';
import {PressableProps} from 'react-native/types';

export type ServiceItemProps = AnimateProps<PressableProps> & {
  item: Partial<Service>;
};
