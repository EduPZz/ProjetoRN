import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Lista = ({data}) => {

    const [camiseta] = useState(data);

    return (
        <View style={estiloLista.Camisetas}>
                <View style={{flexDirection: 'column'}}>
                    <Text style={estiloLista.grupoCamiseta}> {camiseta.grupo} </Text>
                    <Image 
                        style={{height: 250,
                                padding: 90}} 
                        source={camiseta.foto} 
                        resizeMode='contain'
                    />
                </View>

                <View style={estiloLista.camisetaPreco}> 
                    <MaterialCommunityIcons name="coin" size={24} color="yellow" />
                    <Text style={estiloLista.preco} > R${camiseta.preco} </Text> 
                </View>
        </View>
    );
}

export default Lista;