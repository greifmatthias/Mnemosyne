import {useTheme} from '@emotion/react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StatusBar} from 'react-native';

import {IconButton} from 'components';
import {DirScreen, EditServiceScreen, HomeScreen, NetworkScreen} from 'screens';

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const {
    colors: {primary, secondary, neutral, text},
  } = useTheme();

  return (
    <>
      <StatusBar
        translucent
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
          initialRouteName="HomeScreen"
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
            name="HomeScreen"
            component={HomeScreen}
            options={{title: 'Your services'}}
          />
          <Stack.Screen name="DirScreen" component={DirScreen} />
          <Stack.Screen
            name="EditServiceScreen"
            component={EditServiceScreen}
            options={{title: 'Add Service'}}
          />
          <Stack.Screen
            name="NetworkScreen"
            component={NetworkScreen}
            options={{title: 'Search'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
