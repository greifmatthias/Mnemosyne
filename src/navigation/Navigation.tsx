import {useTheme} from '@emotion/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';

import {IconButton} from 'components';

import {NetworkScreen} from 'screens';

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const {
    colors: {primary, secondary, neutral, text},
  } = useTheme();

  return (
    <>
      <StatusBar
        // translucent
        // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        barStyle="dark-content"
        backgroundColor="#00000000"
      />

      <NavigationContainer
        theme={{
          dark: true,
          colors: {
            primary: secondary.base,
            background: neutral.neutral00,
            card: primary.tint40,
            text: text,
            border: '#00000000',
            notification: 'red',
          },
        }}>
        <Stack.Navigator
          initialRouteName="NetworkScreen"
          screenOptions={({navigation}) => ({
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerLeft: ({canGoBack}) =>
              canGoBack ? (
                <IconButton
                  accessibilityLabel="Go back to previous screen"
                  iconProps={{name: 'arrow-back'}}
                  onPress={navigation.goBack}
                />
              ) : null,
          })}>
          <Stack.Screen
            name="NetworkScreen"
            component={NetworkScreen}
            options={{title: 'Services nearby'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
