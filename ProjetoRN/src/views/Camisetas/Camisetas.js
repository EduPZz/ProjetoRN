import React, { useState } from 'react';
import { Text, View, FlatList } from 'react-native';
import estiloCamisetas from './estiloCamisetas';
import { LinearGradient } from 'expo-linear-gradient';
import Lista from '../../components/Lista/Lista';


function Camisetas() {

    const [Camisetas] = useState( [
            {
                id: '1',
                grupo: 'Camiseta autoral',
                preco: '100,00',
                foto: require('../../../assets/imagens/1.png'),
            },
            {
                id: '2',
                grupo: 'Camiseta não autoral',
                preco: '200,00',
                foto: require('../../../assets/imagens/2.png'),
            },
            {
                id: '3',
                grupo: 'Camiseta não autoral',
                preco: '170,00',
                foto: require('../../../assets/imagens/3.png'),
            }    
        ]);
    return (
        <View style={estiloCamisetas.container}>
            <LinearGradient colors={['#E4A9D0', '#C73295']} style={estiloCamisetas.header}>
                    <Text style={estiloCamisetas.texto}>T-skins</Text>
            </LinearGradient>

            <View style={{height: 115}} />

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={Camisetas}
                renderItem={ ({item}) => <Lista data={item}/> }
            />
       </View>
    )
}

export default Camisetas;
