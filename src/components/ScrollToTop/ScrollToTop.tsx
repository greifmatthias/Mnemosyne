import React, {FC, useCallback, useMemo, useState} from 'react';
import {
  GestureResponderEvent,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {FadeInDown, FadeOutDown} from 'react-native-reanimated';

import S from './ScrollToTop.styles';
import {
  ScrollToTopProps,
  UseScrollToTopInterface,
  UseScrollToTopProps,
} from './ScrollToTop.types';

export const ScrollToTop: FC<ScrollToTopProps> = ({
  scrollRef,
  style,
  onPress,

  ...props
}) => {
  const whenPressed = useCallback(
    (e: GestureResponderEvent) => {
      if (scrollRef) {
        scrollRef.current?.scrollTo({
          animated: true,
        });
      }

      if (onPress) onPress(e);
    },
    [onPress, scrollRef],
  );

  return (
    <S.Root
      accessibilityLabel="Scroll to top of screen"
      size="sm"
      iconLeft={{name: 'arrow-upward'}}
      onPress={whenPressed}
      entering={FadeInDown}
      exiting={FadeOutDown}
      {...props}>
      Scroll up
    </S.Root>
  );
};

export const useScrollToTop = ({
  scrollRef,
  minOffset = 300,
  ...props
}: UseScrollToTopProps): UseScrollToTopInterface => {
  const [isVisible, setVisible] = useState<boolean>(() => false);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (e.nativeEvent.contentOffset.y > minOffset) setVisible(true);
      else setVisible(false);

      return () => {
        if (!scrollRef) setVisible(false);
      };
    },
    [scrollRef],
  );

  const control = useMemo(
    () =>
      isVisible && scrollRef ? (
        <ScrollToTop scrollRef={scrollRef} {...props} />
      ) : null,
    [scrollRef, isVisible],
  );

  return {
    isVisible,
    control,
    onScroll,
  };
};
