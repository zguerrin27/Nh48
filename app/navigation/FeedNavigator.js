import React from 'react';
import { createStackNavigator } from  '@react-navigation/stack';

import MountainsScreen from '../screens/MountainsScreen';
import MountainDetailsScreen from '../screens/MountainDetailsScreen';

const Stack = createStackNavigator()

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Mountains" component={MountainsScreen} />
    <Stack.Screen 
      name="MountainDetails" 
      component={MountainDetailsScreen}
      options={{headerShown: false}}
     />
  </Stack.Navigator>
)

export default FeedNavigator;