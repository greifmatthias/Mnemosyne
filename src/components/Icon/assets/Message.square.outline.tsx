import React, {FC} from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export const OutlineSquareMessage: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Circle cx="12" cy="11" r="1" />
    <Circle cx="16" cy="11" r="1" />
    <Circle cx="8" cy="11" r="1" />
    <Path d="M19 3H5a3 3 0 0 0-3 3v15a1 1 0 0 0 .51.87A1 1 0 0 0 3 22a1 1 0 0 0 .51-.14L8 19.14a1 1 0 0 1 .55-.14H19a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm1 13a1 1 0 0 1-1 1H8.55a3 3 0 0 0-1.55.43l-3 1.8V6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1z" />
  </Svg>
);
