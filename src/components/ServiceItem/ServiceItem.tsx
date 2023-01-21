import {useTheme} from '@emotion/react';
import React, {FC, useEffect} from 'react';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {Button, Icon, Text} from 'components';

import S from './ServiceItem.styles';
import {ServiceItemProps} from './ServiceItem.types';

export const ServiceItem: FC<ServiceItemProps> = ({
  item,
  isOpen = false,
  onSavePress,
  onConnectPress,
  ...props
}) => {
  const {
    colors: {primary, neutral},
  } = useTheme();
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotation.value}deg`}],
    };
  });

  useEffect(() => {
    rotation.value = withSpring(isOpen ? 0 : 180);
  }, [isOpen, rotation]);

  return (
    <S.Root
      isOpen={isOpen}
      {...props}
      android_ripple={{
        color: neutral.neutral10,
      }}>
      <S.HeaderContainer>
        <S.QuickInfoContainer>
          <Text variant="lgbutton">{item.name}</Text>
          <Text variant="small">
            {item.host}:{item.port}
          </Text>
        </S.QuickInfoContainer>

        {!isOpen && !!onConnectPress && (
          <S.ConnectIconButton
            iconProps={{name: 'login-outline'}}
            onPress={onConnectPress}
          />
        )}

        <Animated.View style={[animatedStyle]}>
          <Icon name="arrow-upward" />
        </Animated.View>
      </S.HeaderContainer>

      {isOpen && (
        <S.DetailContainer>
          {Object.keys(item)
            .filter(x => x !== 'txt')
            .map((x, index) => (
              <S.DetailRow key={x} entering={FadeInDown.delay(index * 100)}>
                <Text variant="mdbutton">{x}</Text>

                {x === 'addresses' ? (
                  item.addresses?.map(y => (
                    <Text key={y} variant="small">
                      {y}
                    </Text>
                  ))
                ) : (
                  <Text variant="small">{(item as any)[x]}</Text>
                )}
              </S.DetailRow>
            ))}

          {(!!onSavePress || !!onConnectPress) && (
            <S.ActionsContainer
              entering={FadeInDown.delay(200)}
              onStartShouldSetResponder={() => true}>
              {!!onSavePress && (
                <Button
                  iconLeft={{name: 'bookmark-outline'}}
                  onPress={onSavePress}
                  android_ripple={{color: primary.shade10}}>
                  Save
                </Button>
              )}

              {!!onConnectPress && (
                <S.LastActionButton
                  iconLeft={{name: 'login-outline'}}
                  onPress={onConnectPress}
                  android_ripple={{color: primary.shade10}}>
                  Connect
                </S.LastActionButton>
              )}
            </S.ActionsContainer>
          )}
        </S.DetailContainer>
      )}
    </S.Root>
  );
};
