import React from 'react';
import { StatusBar, Text, View, TouchableOpacity, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloPerfil from './estiloPerfil';

function Perfil({ navigation }) {

    return (
    <View style={estiloPerfil.container}>

        <LinearGradient colors={['#E4A9D0', '#C73295']} style={estiloPerfil.header}>
            <Text style={estiloPerfil.texto}>T-skins</Text>
        </LinearGradient>

        <View style={{height: 115}} />
        <Text style={estiloPerfil.titulo}>
            Perfil
        </Text>

        <View style={estiloPerfil.ceoPerfil}>
            <Image style={estiloPerfil.ceoFoto} source={require('../../../assets/imagens/fotoR.png')} resizeMode='contain' />

            <View style={estiloPerfil.ceoDesc}>
                <Text style={estiloPerfil.ceoNome}>Eduardo Alexandre Pozzobom </Text> 
                <Image style={estiloPerfil.ceoIcon} source={require('../../../assets/imagens/ceo.png')} resizeMode='contain' />
            </View>
            <View style={estiloPerfil.ceoSala}>
                <Image style={estiloPerfil.salaIcon} source={require('../../../assets/imagens/classroom.png')} resizeMode='contain' />
                <Text style={estiloPerfil.sala}> 2ºDS-AA </Text> 
            </View> 
        </View>
    </View>
    )
}

export default Perfil;
