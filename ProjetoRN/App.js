import { StatusBar } from 'expo-status-bar';
import React from 'react';
import RotasHomeStack from './src/components/rotasStack/RotasHomeStack';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer >

        <StatusBar barStyle="light-content" backgroundColor="#081a31" />  

        <RotasHomeStack />
  
    </NavigationContainer>
  );
};

export default App;