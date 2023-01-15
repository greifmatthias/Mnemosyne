import React, {FC} from 'react';

import {useColor} from 'context';
import {getColorsFromRGBA, getRgbaFromHex} from 'helpers';

import S from './Lottie.styles';
import {animations, LottieProps} from './Lottie.types';

export const Lottie: FC<LottieProps> = ({
  name,
  color = 'secondary',
  size = 'md',
  autoPlay = true,
  loop = true,

  ...props
}) => {
  const backColor = useColor(`${color}.shade20`);
  const checkColor = useColor(`${color}.base`);

  // Format color for use in lottie
  const backRgba = getRgbaFromHex(backColor);
  const {R: bR, G: bG, B: bB, A: bA = 255} = getColorsFromRGBA(backRgba);
  const checkRgba = getRgbaFromHex(checkColor);
  const {R: cR, G: cG, B: cB, A: cA = 255} = getColorsFromRGBA(checkRgba);

  return (
    <S.Root
      source={animations[name](
        [bR / 255, bG / 255, bB / 255, bA / 255],
        [cR / 255, cG / 255, cB / 255, cA / 255],
      )}
      size={size}
      autoPlay={autoPlay}
      loop={loop}
      {...props}
    />
  );
};
