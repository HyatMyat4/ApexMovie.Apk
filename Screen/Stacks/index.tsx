import {useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../HomeScreen';
import MainScreen from '../MainScreen';

const Stack = createNativeStackNavigator<any>();

const Stackscreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'HomeScreen'}
        component={HomeScreen}
        initialParams={{isDarkMode: isDarkMode}}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'MainScreen'}
        component={MainScreen}
        initialParams={{isDarkMode: isDarkMode}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Stackscreen;
