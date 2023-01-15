import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const OutlineNavigation: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M13.67 22h-.06a1 1 0 0 1-.92-.8L11 13l-8.2-1.69a1 1 0 0 1-.12-1.93l16-5.33A1 1 0 0 1 20 5.32l-5.33 16a1 1 0 0 1-1 .68zm-6.8-11.9l5.19 1.06a1 1 0 0 1 .79.78l1.05 5.19 3.52-10.55z" />
  </Svg>
);
