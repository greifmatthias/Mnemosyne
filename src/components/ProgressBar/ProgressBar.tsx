import {useTheme} from '@emotion/react';
import colorAlpha from 'color-alpha';
import {FC} from 'react';

import S from './ProgressBar.styles';
import {ProgressBarProps} from './ProgressBar.types';

export const ProgressBar: FC<ProgressBarProps> = ({
  size = 'md',
  value = 100,
  maxValue = 100,
  showProgressValue = false,
  ...props
}) => {
  const {colors} = useTheme();

  return (
    <S.Root
      value={value}
      maxValue={maxValue}
      radius={S.sizes[size]}
      duration={300}
      //   circleBackgroundColor={colorAlpha(colors.neutral.neutral00, 0.15)}
      inActiveStrokeWidth={4}
      inActiveStrokeColor={colorAlpha(colors.neutral.neutral00, 0.15)}
      activeStrokeWidth={4}
      activeStrokeColor={colors.secondary.base}
      showProgressValue={showProgressValue}
      {...props}
    />
  );
};
