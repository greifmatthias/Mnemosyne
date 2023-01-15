import {ReactNode, RefObject} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';
import Animated from 'react-native-reanimated';

import {ButtonProps} from 'components/Button';

export type ScrollToTopProps = Omit<ButtonProps, 'children'> & {
  scrollRef: RefObject<ScrollView | Animated.ScrollView | null>;
};

export type UseScrollToTopProps = ScrollToTopProps & {
  minOffset?: number;
};

export type UseScrollToTopInterface = {
  isVisible: boolean;
  control: ReactNode;
  onScroll: ScrollViewProps['onScroll'];
};
