import {useColor} from 'context';
import React, {FC} from 'react';

import {IllustrationProps, illustrations} from './Illustration.types';

export const Illustration: FC<IllustrationProps> = ({
  name = 'none',
  width = 260,
  height = 260,
  color = 'primary.base',

  ...props
}) => {
  const Illu = illustrations[name];

  const newColor = useColor(color);

  return <Illu width={width} height={height} fill={newColor} {...props} />;
};
