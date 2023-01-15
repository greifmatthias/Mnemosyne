import React, {FC} from 'react';
import Svg, {Rect, SvgProps} from 'react-native-svg';

export const Menu: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Rect x="3" y="11" width="18" height="2" rx=".95" ry=".95" />
    <Rect x="3" y="16" width="18" height="2" rx=".95" ry=".95" />
    <Rect x="3" y="6" width="18" height="2" rx=".95" ry=".95" />
  </Svg>
);
