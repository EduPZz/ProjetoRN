import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import estiloListaAlunos from './estiloListaAlunos';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListaAlunos = ({data, detalhe}) => {

    const [ aluno, setAluno ] = useState(data);

    console.log(data)

    let imagem;
    if(aluno.ceo){
        imagem = <Image style={estiloListaAlunos.ceoIcon} source={require('../../../assets/imagens/ceo.png')} resizeMode='contain' />;
    }
    else{
        imagem="";
    }
    return (
    <TouchableOpacity style={estiloListaAlunos.ceoPerfil} onPress={detalhe}>

            <View style={estiloListaAlunos.ceoDesc}>
                <Text style={estiloListaAlunos.ceoNome}>{aluno.nome} </Text> 
            {imagem}
            </View>
            <View style={estiloListaAlunos.ceoSala}>
                <Image style={estiloListaAlunos.salaIcon} source={require('../../../assets/imagens/classroom.png')} resizeMode='contain' />
                <Text style={estiloListaAlunos.sala}>{aluno.sala}</Text> 
            <View style={{height: 20}}></View>
            </View>
            
    </TouchableOpacity>
    );
}

export default ListaAlunos;