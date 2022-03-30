import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenA from './screens/ScreenA/ScreenA';
import ScreenB from './screens/ScreenB/ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Path from './constants/urls';
const App = () => {
  const Tab = createBottomTabNavigator();

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === Path.ScreenA) {
              iconName = 'autoprefixer';
              size = focused ? 25 : 20;
              color = focused ? 'blue' : '#555';
            } else if (route.name === Path.ScreenB) {
              iconName = 'btc';
              size = focused ? 25 : 20;
              color = focused ? 'blue' : '#555';
            }
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fof',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
        }}>
        <Tab.Screen name="ScreenA" component={ScreenA} />
        <Tab.Screen name="ScreenB" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
