import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const CircleArrowDown: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.69 11.86l-3 2.86a.49.49 0 0 1-.15.1.54.54 0 0 1-.16.1.94.94 0 0 1-.76 0 1 1 0 0 1-.33-.21l-3-3a1 1 0 0 1 1.42-1.42l1.29 1.3V8a1 1 0 0 1 2 0v5.66l1.31-1.25a1 1 0 0 1 1.38 1.45z" />
  </Svg>
);
