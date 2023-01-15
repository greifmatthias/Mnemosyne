import React, {FC} from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

export const FluentHeart: FC<SvgProps> = ({fill, ...props}) => (
  <Svg viewBox="0 0 172 172" {...props}>
    <Defs>
      <LinearGradient
        id="color"
        x1="57.12192"
        y1="16.54425"
        x2="126.35192"
        y2="123.15917"
        gradientUnits="userSpaceOnUse">
        <Stop offset="0.002" stopColor="#f44f78" />
        <Stop offset="0.397" stopColor="#e4305d" />
        <Stop offset="0.763" stopColor="#d81b4a" />
        <Stop offset="1" stopColor="#d41343" />
      </LinearGradient>
    </Defs>

    <Path
      fill="url(#color)"
      d="M86,43.89583c0,0 16.84525,-18.8125 37.625,-18.8125c20.77975,0 37.625,17.07458 37.625,37.625c0,12.73875 -12.54525,25.07975 -12.54525,25.07975l-56.35867,56.36583c-3.5045,3.5045 -9.19125,3.5045 -12.69575,0l-56.35508,-56.36583c0,0 -12.54525,-12.34817 -12.54525,-25.07975c0,-20.55042 16.84525,-37.625 37.625,-37.625c20.77975,0 37.625,18.8125 37.625,18.8125z"
    />
  </Svg>
);
