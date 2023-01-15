import React, {FC} from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export const Unlock: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Circle cx="12" cy="15" r="1" />
    <Path d="M17 8h-7V6a2 2 0 0 1 4 0 1 1 0 0 0 2 0 4 4 0 0 0-8 0v2H7a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zm-5 10a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
  </Svg>
);
