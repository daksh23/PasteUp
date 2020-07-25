import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Download from './Download'
import EyeShot from '../Wallpapers/Eyeshot'

const Stack = createStackNavigator();

function DownloadMostNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Most Downloaded">
        <Stack.Screen name="Most Downloaded" component={Download} />
        <Stack.Screen name="EyeShot" component={EyeShot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DownloadMostNav;