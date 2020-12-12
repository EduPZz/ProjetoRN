import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, CheckBox, Image } from 'react-native';
import estiloAluno from './estiloAluno';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { AlunoFB } from '../../firebase/alunoFB';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Aluno({ navigation, route }) {

    const [aluno, setAluno] = useState({});
    const {operacao, setOperacao} = route.params;

    const alunoFb = new AlunoFB();

    useEffect(() => {
            setAluno(route.params.aluno);
    }, [route.params.aluno]);

    const voltar = () => {
        navigation.navigate('Perfil')
    }

    const salvar = () => {
        operacao == 'adicionar' ? alunoFb.adicionarAluno(aluno) : alunoFb.editarAluno(aluno);
        voltar();
    }
    
    const remover = () => {
        alunoFb.removerAluno(aluno);
        voltar();
    }
    
    return (        
        <LinearGradient colors={['#B2B2F3', '#E2E2F5']} style={{height: '100%',}}>
            <View style={estiloAluno.container}>
            
            <LinearGradient colors={['#E4A9D0', '#C73295']} style={estiloAluno.header}>
            <Text style={estiloAluno.textoH}>T-skins</Text>
            </LinearGradient>
            
            <View style={estiloAluno.botoes}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text></Text>
                <Text></Text> 
            </View> 
            
            <View style={estiloAluno.formularioContainer}>
                
                    <View style={estiloAluno.campoContainer}>
                        <FontAwesome5 name="user" size={26} color="#FF00CC" />
                        <TextInput 
                            style={estiloAluno.campo}
                            placeholder="Nome"
                            placeholderTextColor='#FFFFFF'
                            onChangeText={nome => setAluno({...aluno, nome})}
                            value={aluno.nome}
                        />
                    </View>

                    <View style={estiloAluno.campoContainer}>
                        <MaterialCommunityIcons name="google-classroom" size={26} color="#FF00CC" />
                            <TextInput 
                            style={estiloAluno.campo}
                            placeholder="Sala"
                            placeholderTextColor='#FFFFFF'
                            onChangeText={sala => setAluno({...aluno, sala})}
                            value={aluno.sala}
                        />
                    </View>

                    <View style={estiloAluno.campoContainer}>
                        <Image style={estiloAluno.ceoIcon} source={require('../../../assets/imagens/ceo1.png')} resizeMode='contain'/>
                        <CheckBox
                            value={aluno.ceo}
                            onValueChange={ceo => setAluno({...aluno, ceo})}
                            style={estiloAluno.check}
                        />
                    </View>

                    <View style={estiloAluno.botoesContainer}>

                        <TouchableOpacity onPress={() => salvar(aluno)} style={estiloAluno.botaoContainer}>
                            <LinearGradient colors={['#F593F5', '#F5C1EB', '#F593F5']} style={estiloAluno.botao}>
                                <MaterialIcons name="save" size={28} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => remover(aluno)} style={estiloAluno.botaoContainer}>
                            <LinearGradient colors={['#F593F5', '#F5C1EB', '#F593F5']} style={estiloAluno.botao}>
                                <MaterialIcons name="delete" size={24} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                
            </View>
            
            </View>
        </LinearGradient> 
    )
}

export default Aluno;
