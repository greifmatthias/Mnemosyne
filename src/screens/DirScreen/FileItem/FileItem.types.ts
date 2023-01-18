import {AnimateProps} from 'react-native-reanimated';
import {PressableProps} from 'react-native/types';

import {FileItem} from 'hooks';

export type FileItemProps = AnimateProps<PressableProps> & {
  item: Partial<FileItem>;
};
