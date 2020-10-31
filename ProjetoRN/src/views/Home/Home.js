import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloHome from './estiloHome';


function Home({ navigation }) {

    const abrirCamisetas = () => {
        navigation.navigate('Camisetas')
    }
    
    const abrirPerfil = () => {
        navigation.navigate('Perfil')
    }
    
    return (
        <View style={estiloHome.container}>

            <ImageBackground source={require('../../../assets/imagens/vaporwaveD.png')} style={estiloHome.fundo}>

                <View >
                    <Text style={estiloHome.texto}>
                    T-Skins
                    </Text>
                    <View style={estiloHome.caixaTexto}>
                        <Text>Loja de camisetas </Text> 
                        <Text> temáticas de cs:go</Text>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={abrirCamisetas} style={estiloHome.botao1}>
                            <Text style={estiloHome.botaoTexto1}>Camisetas</Text>
                    </TouchableOpacity>

                    <View style={{height: 20}} /> 

                    <TouchableOpacity onPress={abrirPerfil} style={estiloHome.botao2}>
                            <Text style={estiloHome.botaoTexto2}>Perfil</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home;
