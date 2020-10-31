import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RotasTab from '../rotasTab/RotasTab';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator();

const RotasHomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen 
                name="Home" 
                component={RotasTab}
                options={
                    { 
                    cardStyle: estiloRotasStack.screenHome,
                    headerShown: false
                    }            
                }               
            />
        </Stack.Navigator>
    );
}

export default RotasHomeStack;