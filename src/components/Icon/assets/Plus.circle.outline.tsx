import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const OutlineCirclePlus: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <Path d="M15 11h-2V9a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2z" />
  </Svg>
);