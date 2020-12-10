import React from 'react';
import { createBottomTabNavigator } from  '@react-navigation/bottom-tabs';

import HikeEditScreen from '../screens/HikeEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="Hike Edit" component={HikeEditScreen} />
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
)

export default AppNavigator;