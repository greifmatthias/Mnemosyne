import React, {FC, useMemo} from 'react';

import {useColor} from 'context';

import S from './Icon.styles';
import {IconProps, icons} from './Icon.types';

export const Icon: FC<IconProps> = ({
  name = 'none',
  color = 'text',
  size = 'md',

  ...props
}) => {
  const Ico = icons[name];

  const {width, height} = useMemo(() => {
    if (typeof size !== 'string') return size;

    const defaultSize = S.iconsizes[size];
    return {
      width: defaultSize,
      height: defaultSize,
    };
  }, [size]);

  const newColor = useColor(color);

  return <Ico width={width} height={height} fill={newColor} {...props} />;
};
