import React, {FC} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const OutlinePaperPlane: FC<SvgProps> = ({width, height, ...props}) => (
  <Svg viewBox="0 0 24 24" width={width} height={height} {...props}>
    <Path
      transform={`rotate(45 ${((width as number) - 7) / 2} ${
        ((height as number) - 11) / 2
      })`}
      d="M21 4a1.31 1.31 0 0 0-.06-.27v-.09a1 1 0 0 0-.2-.3 1 1 0 0 0-.29-.19h-.09a.86.86 0 0 0-.31-.15H20a1 1 0 0 0-.3 0l-18 6a1 1 0 0 0 0 1.9l8.53 2.84 2.84 8.53a1 1 0 0 0 1.9 0l6-18A1 1 0 0 0 21 4zm-4.7 2.29l-5.57 5.57L5.16 10zM14 18.84l-1.86-5.57 5.57-5.57z"
    />
  </Svg>
);
