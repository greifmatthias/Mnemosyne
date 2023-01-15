import {IconProps} from 'components/Icon';

import * as assets from './assets';

export const illustrations = {
  none: assets.None,
  detectivecheckfootprint: assets.DetectiveCheckFootprint,
  text: assets.Text,
};

type Illustrations = typeof illustrations;
export type IllustrationName = keyof Illustrations;

export type IllustrationProps = Omit<IconProps, 'name'> & {
  name?: IllustrationName;
};
