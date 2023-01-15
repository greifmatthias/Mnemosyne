import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Search: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" />
  </Svg>
);
