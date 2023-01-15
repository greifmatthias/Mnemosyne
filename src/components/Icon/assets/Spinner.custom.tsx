import React, {FC, useEffect} from 'react';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';

import {IconAssetProps} from '../Icon.types';

export const Spinner: FC<IconAssetProps> = ({
  width = 24,
  height = 24,
  fill,
  extra = {
    percentage: 0,
  },
  style,

  ...props
}) => {
  const w = +width;
  const h = +height;
  const strokeWidth = 2;
  const radius = (w - strokeWidth) / 2;
  const circum = radius * 2 * Math.PI;
  const svgProgress = 100 - extra.percentage;

  const rotation = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${rotation.value}deg`,
        },
      ],
    };
  }, [rotation.value]);

  useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
    );

    return () => cancelAnimation(rotation);
  }, []);

  const Component = Animated.createAnimatedComponent(Svg);

  return (
    <Component
      width={width}
      height={height}
      style={[style, animatedStyles]}
      {...props}>
      {/* Background Circle */}
      {/* <Circle
        stroke={fill}
        fill="none"
        cx={w / 2}
        cy={w / 2}
        r={radius}
        strokeWidth={strokeWidth}
      /> */}

      {/* Progress Circle */}
      <Circle
        fill="none"
        cx={w / 2}
        cy={h / 2}
        r={radius}
        stroke={fill}
        strokeWidth={strokeWidth}
        strokeDasharray={`${circum} ${circum}`}
        strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
        strokeLinecap="round"
        transform={`rotate(-90, ${w / 2}, ${h / 2})`}
      />

      {/* Text */}
      {/* <SVGText
        fontSize={props.textSize ? props.textSize : '10'}
        x={size / 2}
        y={size / 2 + (props.textSize ? props.textSize / 2 - 1 : 5)}
        textAnchor="middle"
        fill={props.textColor ? props.textColor : '#333333'}>
        {text}
      </SVGText> */}
    </Component>
  );
};
