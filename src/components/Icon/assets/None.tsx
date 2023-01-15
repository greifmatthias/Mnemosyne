import React, {FC} from 'react';
import Svg, {SvgProps} from 'react-native-svg';

export const None: FC<SvgProps> = props => (
  <Svg viewBox="0 0 24 24" {...props} />
);
