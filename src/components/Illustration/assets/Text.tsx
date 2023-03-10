import {useTheme} from '@emotion/react';
import React, {FC} from 'react';
import Svg, {Circle, Path, Polygon, Rect, SvgProps} from 'react-native-svg';

export const Text: FC<SvgProps> = props => {
  const {colors} = useTheme();

  return (
    <Svg viewBox="0 0 865.76 682.89" {...props}>
      <Path
        d="M682.48,76.15H579.81a26.16,26.16,0,0,0-26.16,26.16v45.28a26.16,26.16,0,0,0,26.16,26.15h23.51c-2.19,7.88-9.07,15.72-12.64,19.39a.58.58,0,0,0,.67.93c7.69-3.77,23.64-14.19,32.84-20.32h58.29a26.16,26.16,0,0,0,26.16-26.15V102.31A26.16,26.16,0,0,0,682.48,76.15Z"
        fill={colors.primary.tint20}
      />

      <Path
        d="M695.78,204.34H590.51a12.86,12.86,0,0,0-12.86,12.86v29.32a12.86,12.86,0,0,0,12.86,12.86h58c10.79,7.28,22.94,10,28.51,10.86a.68.68,0,0,0,.48-1.23,23.43,23.43,0,0,1-8.39-9.63h26.67a12.86,12.86,0,0,0,12.86-12.86V217.2A12.86,12.86,0,0,0,695.78,204.34Z"
        fill={colors.primary.tint20}
      />

      <Path
        d="M592,302.82H709c7.89,0,14.3,5.76,14.3,12.86V345c0,7.11-6.41,12.87-14.3,12.87H644.49c-12,7.28-26.89,13.91-33.08,14.8a.67.67,0,0,1-.54-1.22c5.5-3.44,9.49-11.06,10.72-13.58H592c-7.9,0-14.3-5.76-14.3-12.87V315.68C577.65,308.58,584.05,302.82,592,302.82Z"
        fill={colors.primary.tint20}
      />

      <Path
        d="M30.05,674.72H797.43S849.63,578.9,787,530.23c0,0-47.7-44.91-124.85-33.85-35.08,5-70.94,1.82-104-10.94-21-8.09-42.81-19.61-60.16-35.9-17.74-16.66-38.22-30.17-60.92-39-49.76-19.29-138.9-37.22-208.17,11.48,0,0-46.4,32.37-90.25,102.32,0,0-14.39,22.38-36.17,34.27A65.81,65.81,0,0,1,90,563.74C76.4,567.91,16.13,591.23,30.05,674.72Z"
        fill={colors.primary.tint20}
      />

      <Rect
        x="144.42"
        y="76.15"
        width="387.17"
        height="295.9"
        rx="16.97"
        fill={colors.primary.tint20}
      />

      <Path
        d="M184.71,96.77h-8l-22.12,54.55h8.63l6.17-15.41h22.81l5.38,15.41h8.5ZM171.12,130l9.59-26.21L190.29,130Z"
        fill={colors.primary.shade20}
      />

      <Rect
        x="211.41"
        y="139.25"
        width="117.95"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="211.41"
        y="110.88"
        width="117.95"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="161.9"
        y="216.94"
        width="165.52"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="161.9"
        y="253.35"
        width="165.52"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="159.95"
        y="287.6"
        width="165.52"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="159.95"
        y="317.98"
        width="165.52"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="219.17"
        y="341.9"
        width="106.3"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="161.9"
        y="180.53"
        width="169.89"
        height="12.06"
        rx="4.84"
        fill={colors.neutral.neutral00}
      />

      <Path
        d="M222.81,530.23h0a6.07,6.07,0,0,0,6.07-6.07h0a6.06,6.06,0,0,0-6.07-6.06h0a11.41,11.41,0,0,1-8.32-3.6,46.15,46.15,0,0,1-5-6.6c-7.76-13.59-6.31-43.68-6.31-43.68-.54-22,3.78-34.74,7.7-41.68a14.47,14.47,0,0,1,12.62-7.35h0a5.41,5.41,0,0,0,5.41-5.41h0a5.41,5.41,0,0,0-5.41-5.41h0a24.31,24.31,0,0,0-20.26,10.8,64.62,64.62,0,0,0-6.37,12.64C195,417,187.17,410.4,181.78,407.08a18.38,18.38,0,0,0-9.62-2.71h0a6.48,6.48,0,0,0-6.48,6.47h0a6.47,6.47,0,0,0,6.48,6.47h1.25a12.35,12.35,0,0,1,11,6.69c3.61,6.95,8,19.69,7.19,39.91,0,0,2.7,27.65-5.78,44.64a16.39,16.39,0,0,1-14.66,9.08h0a5.45,5.45,0,0,0-5.45,5.45v.85a6.31,6.31,0,0,0,6.31,6.3h0a24.18,24.18,0,0,0,22.8-15.65,40.29,40.29,0,0,0,2.05-8.62s2.68,11.09,11,18.6A22.32,22.32,0,0,0,222.81,530.23Z"
        fill={colors.neutral.neutral80}
      />

      <Path
        d="M405.53,432.8H248.88a12.29,12.29,0,0,0-12.29,12.29v41.76a12.29,12.29,0,0,0,12.29,12.29H405.53a12.29,12.29,0,0,0,12.29-12.29V445.09A12.29,12.29,0,0,0,405.53,432.8ZM286.67,455.32h-8.49v23.47h-8.79V455.32h-8.57v-6.5h25.85Zm31.56,23.47H295.52v-30H318.2v6.5H304v4.83h13.65v6.51H304v5.62h15.24Zm27.95,0-5-9.76h-.08l-5.14,9.76h-9.38l9.33-14.94-9.13-15H336.9l4.67,9.25h.12l4.82-9.25h9.23L346.62,463l9.67,15.84Zm42.22-23.47h-8.5v23.47h-8.79V455.32h-8.56v-6.5H388.4Z"
        fill={colors.neutral.neutral80}
      />

      <Path
        d="M593,526.65h93.16a3.56,3.56,0,0,1,3.53,4l-15.25,112.6a8.8,8.8,0,0,1-8.72,7.62H621.08a8.8,8.8,0,0,1-8.62-7L589.52,530.92A3.56,3.56,0,0,1,593,526.65Z"
        fill={colors.primary.shade20}
      />

      <Path
        d="M611.3,526.65s-36.08-66-28.38-88.33a6.81,6.81,0,0,1,10-3.57c8.16,5.18,22.44,26.9,31.29,91.9"
        fill="none"
        stroke={colors.primary.shade40}
        strokeMiterlimit="10"
        strokeWidth="2"
      />

      <Path
        d="M626.22,526.65s-20-81.57-5.73-104.54a7.54,7.54,0,0,1,11.86-1.43c7.53,7.86,18.4,31.23,11.09,106"
        fill="none"
        stroke={colors.primary.shade40}
        strokeMiterlimit="10"
        strokeWidth="2"
      />

      <Path
        d="M647.87,526s-1.56-80.2,18.77-98.32a8.39,8.39,0,0,1,12.62,2.15c5.87,9.9,11.88,26.61-14,97.23"
        fill="none"
        stroke={colors.primary.shade40}
        strokeMiterlimit="10"
        strokeWidth="2"
      />

      <Path
        d="M703.79,613.32s-18.93-33.53-1.34-33.8a14.4,14.4,0,0,1,10.89,4.87c2.87,3.19,7.67,6.55,11.28-.93,0,0,3.53-16.93,16.89-4,0,0,8.25,12.59,21.22,5.13,0,0,17.68-10.42,19.65,9.33,0,0,.39,13.85-8.65,19.35Z"
        fill={colors.primary.shade40}
      />

      <Path
        d="M690.5,613.6l8.17,37.31h84.79l4.77-37.57a2.86,2.86,0,0,0-2.83-3.21H693.29A2.86,2.86,0,0,0,690.5,613.6Z"
        fill={colors.primary.shade20}
      />

      <Rect
        x="573.93"
        y="110.34"
        width="116.01"
        height="7.77"
        rx="3.11"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="592.29"
        y="316.36"
        width="116.01"
        height="7.77"
        rx="3.11"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="645.86"
        y="338.01"
        width="56.05"
        height="9.92"
        rx="3.43"
        fill={colors.neutral.neutral00}
      />

      <Rect
        x="633.89"
        y="133.26"
        width="56.05"
        height="9.92"
        rx="3.43"
        fill={colors.neutral.neutral00}
      />

      <Circle
        cx="612.16"
        cy="231.86"
        r="5.98"
        fill={colors.neutral.neutral00}
      />

      <Circle
        cx="644.32"
        cy="231.86"
        r="5.98"
        fill={colors.neutral.neutral00}
      />

      <Circle
        cx="674.13"
        cy="231.86"
        r="5.98"
        fill={colors.neutral.neutral00}
      />

      <Rect x="475.88" y="211.78" width="22.57" height="22.57" fill="#f9b499" />

      <Path
        d="M486.72,627.61,488,644.76c1,6.8-6.79,6.15-6.79,6.15H456.46c-12.14-2.59,4.37-8.58,4.37-8.58,10.19-3.88,9.22-11.81,9.22-11.81Z"
        fill={colors.tertiary.shade20}
      />

      <Path
        d="M539.14,627.59l1.29,17.15c1,6.8-6.79,6.15-6.79,6.15H508.88c-12.13-2.59,4.37-8.57,4.37-8.57,10.19-3.89,9.22-11.82,9.22-11.82Z"
        fill={colors.tertiary.shade20}
      />

      <Polygon
        points="386.2 8.18 422.9 8.18 496.44 198.14 454.89 198.14 438.18 155.8 373.13 155.8 359.54 198.14 318.77 198.14 386.2 8.18"
        fill={colors.primary.shade20}
      />

      <Polygon
        points="356.95 194.13 324.92 194.13 388.34 12.12 420.61 12.12 491.89 194.13 456.62 194.13 441.09 151.32 371.19 151.32 356.95 194.13"
        fill={colors.neutral.neutral00}
      />

      <Polygon
        points="404.85 47.07 380.25 124.41 431.38 124.41 404.85 47.07"
        fill={colors.primary.shade20}
      />

      <Polygon
        points="384.78 121.18 404.2 60.34 426.2 121.18 384.78 121.18"
        fill={colors.neutral.neutral00}
      />

      <Path
        d="M446.4,387l20.4,242a4.41,4.41,0,0,0,4.4,4.05h14a4.41,4.41,0,0,0,4.41-4.29l5.15-179.16a3.06,3.06,0,0,1,3.09-3h0a3.06,3.06,0,0,1,3,2.82l13.76,176.15a8.09,8.09,0,0,0,8.07,7.46h10.84a8.1,8.1,0,0,0,8.09-8.21L538,376.82Z"
        fill={colors.neutral.neutral80}
      />

      <Path
        d="M365.79,213c-.59-4-3.26-10.81-4.91-12.55a6.94,6.94,0,0,0-5.07-2.14h-32.4s0,4,10,5.34c0,0,19.95,1.7,20.3,10.6Z"
        fill="#f9b499"
      />

      <Path
        d="M449.94,78l13.22,34.59,4.81-8.3A29.35,29.35,0,0,0,449.94,78Z"
        fill="#f9b499"
      />

      <Path
        d="M466.65,121.18s-11.63-6.79-.54-16.05a4.73,4.73,0,0,1,5.38-.5c10.46,6,49,28.92,63.07,48.61a8.08,8.08,0,0,1,1.49,4.8c-.09,10.1-.87,48.27-7.27,81.9,0,0-1.83,17.41.49,30.31S541.65,379,541.65,379s1.94,8-13.35,10.2c0,0-66.26,9-82,6.55,0,0-7.77-.92-7.28-8.71,0,0-3.4-96-5.67-107.79,0,0-1.45-2.75-3.72-1.13,0,0-46.92,34.3-58.08,21.84,0,0-11-13.18-15.54-49.87,0,0-5.51-26.14-4.85-35.51a3.67,3.67,0,0,1,2.87-3.3l6.22-1.4a5.5,5.5,0,0,1,4.45.81,3.74,3.74,0,0,1,1.67,2.71s11.32,58.9,20.38,53.4c0,0,13.88-7.44,24.72-16.67a142.21,142.21,0,0,1,15.33-11.54c9.66-6.21,23.61-14.08,32.76-14.49,0,0,26.61-.21,36.15-.1a4.74,4.74,0,0,0,4.5-3.13l1.41-3.93,6.86-55.54a8.81,8.81,0,0,0-3.09-7.82Z"
        fill={colors.tertiary.shade20}
      />

      <Path
        d="M490.92,218c-8.71,1.07-19.87-1.47-29.65-16a25.29,25.29,0,0,1-1.38-11.26,129.92,129.92,0,0,0,1.63-16.47l.14-6.33s6.65-24.67,27-24.67c0,0,22.86-4.7,32.89,16.84,0,0,2.05,7.27-1.51,13.74,0,0-1.63,4.89,2.1,6.65,0,0,3.72,8.85-1.78,13.56l-10.32,12.92A29.27,29.27,0,0,1,490.92,218Z"
        fill={colors.neutral.neutral80}
      />
    </Svg>
  );
};
