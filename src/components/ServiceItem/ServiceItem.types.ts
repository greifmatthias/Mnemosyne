import {AnimateProps} from 'react-native-reanimated';
import {PressableProps} from 'react-native/types';

import {ConnectService} from 'types';

export type ServiceItemProps = AnimateProps<PressableProps> & {
  item: Partial<ConnectService>;
  isOpen?: boolean;
  editMode?: 'edit' | 'save';
  onRemovePress?: PressableProps['onPress'];
  onEditPress?: PressableProps['onPress'];
  onConnectPress?: PressableProps['onPress'];
};
