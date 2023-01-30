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
  editMode = 'edit',
  onRemovePress,
  onEditPress,
  onConnectPress,
  ...props
}) => {
  const {
    colors: {primary, tertiary, neutral},
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
          <Text variant="lgbutton">{item?.name}</Text>
          <Text variant="small">
            {item?.host}:{item?.port}
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
          {Object.keys(item || {})
            .filter(x => x !== 'txt')
            .map((x, index) => (
              <S.DetailRow key={x} entering={FadeInDown.delay(index * 100)}>
                <Text variant="mdbutton">{x}</Text>

                <Text variant="small">{(item as any)[x]}</Text>
              </S.DetailRow>
            ))}

          {(!!onEditPress || !!onRemovePress || !!onConnectPress) && (
            <S.ActionsContainer
              entering={FadeInDown.delay(200)}
              onStartShouldSetResponder={() => true}>
              {!!onRemovePress && (
                <S.RemoveButton
                  iconProps={{name: 'trash-outline', size: 'sm'}}
                  onPress={onRemovePress}
                  android_ripple={{color: tertiary.shade10}}
                />
              )}

              <S.RightActionsContainer>
                {!!onEditPress && (
                  <Button
                    iconLeft={{
                      name:
                        editMode === 'edit'
                          ? 'edit-outline'
                          : 'bookmark-outline',
                    }}
                    onPress={onEditPress}
                    android_ripple={{color: primary.shade10}}>
                    {editMode === 'edit' ? 'Edit' : 'Save'}
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
              </S.RightActionsContainer>
            </S.ActionsContainer>
          )}
        </S.DetailContainer>
      )}
    </S.Root>
  );
};
