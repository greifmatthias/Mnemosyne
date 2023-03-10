import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Checkmark: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M9.86 18a1 1 0 0 1-.73-.32l-4.86-5.17a1 1 0 1 1 1.46-1.37l4.12 4.39 8.41-9.2a1 1 0 1 1 1.48 1.34l-9.14 10a1 1 0 0 1-.73.33z" />
  </Svg>
);
