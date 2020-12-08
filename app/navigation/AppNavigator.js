import React from 'react';
import { createBottomTabNavigator } from  '@react-navigation/bottom-tabs';

import MountainsScreen from '../screens/MountainsScreen';
import HikeEditScreen from '../screens/HikeEditScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="All Mountains" component={MountainsScreen} />
    <Tab.Screen name="Hike Edit" component={HikeEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
)

export default AppNavigator;