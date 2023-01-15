import React, {FC} from 'react';
import Svg, {Circle, Path, SvgProps} from 'react-native-svg';

export const OutlineInfo: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
    <Circle cx="12" cy="8" r="1" />
    <Path d="M12 10a1 1 0 0 0-1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0-1-1z" />
  </Svg>
);
