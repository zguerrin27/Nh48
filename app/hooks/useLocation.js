import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default useLocation = () => {
  const [location, setLocation] =  useState();

  const getLocation = async () => {
    try {
      const { granted} = await Location.requestPermissionsAsync();
      if(!granted) return;
      let { coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      setLocation({latitude, longitude});  
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getLocation()
  },[])

  return location
};

