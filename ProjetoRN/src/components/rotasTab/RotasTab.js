import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Perfil from '../../views/Perfil/Perfil';
import Camisetas from '../../views/Camisetas/Camisetas';
import Home from '../../views/Home/Home';
import Aluno from '../../views/Aluno/Aluno';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const icones = {
    Home: { name: 'home' },
    Camisetas: { name: 'tshirt' },
    Perfil: { name: 'users' },
    Aluno: { name: 'user-edit' },
}

const RotasTab = () => {
    return (
    <Tab.Navigator 
      tabBarOptions={
        {    
        showIcon: true,
        showLabel: false,
        activeTintColor: '#DE0973',
        inactiveTintColor: 'black',
        style: {
          backgroundColor:'white',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 0, 
          opacity: 0.5 
        }}
      }
      screenOptions={ ({route}) =>({
        tabBarIcon: ({color, size}) => {
            const {name} = icones[route.name];
            return <FontAwesome5 name={name} size={size} color={color} />
          }
        }) }
    >
      <Tab.Screen name="Camisetas" component={Camisetas} />
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
            unmountOnBlur: true,
        }}
      />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Aluno" component={Aluno} initialParams={{aluno: {}, operacao: 'adicionar'}}/>
    </Tab.Navigator>
  ); 
}
export default RotasTab;