import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloPerfil from './estiloPerfil';
import ListaAlunos from '../../components/ListaAlunos/ListaAlunos'
import { MaterialIcons } from '@expo/vector-icons';
import { AlunoFB } from '../../firebase/alunoFB';

function Perfil({ navigation }) {

    const [ perfil, setPerfil ] = useState([]);

    const alunoFb = new AlunoFB();

    useEffect(() => {
        alunoFb.pegarAlunos()
            .orderBy('nome')
            .onSnapshot((query) => {
                const alunos = [];
                query.forEach((doc) => {
                    alunos.push({...doc.data(), id: doc.id});
                });
                setPerfil(alunos);
            });
            console.log(perfil)
    }, []);

    
    const voltar = () => {
        navigation.navigate('Home')
    }
    const adicionar = () => {
        navigation.navigate('Aluno', {aluno: {}, operacao: 'adicionar'})
    }
    const editar = (aluno) => {
        navigation.navigate('Aluno', {aluno: aluno, operacao: 'editar'})
    }

    return (
    <View style={estiloPerfil.container}>

        <LinearGradient colors={['#E4A9D0', '#C73295']} style={estiloPerfil.header}>
            <Text style={estiloPerfil.texto}>T-skins</Text>
        </LinearGradient>

        <View style={{height: 115}} />
       
        <View style={estiloPerfil.botoes}>
            <TouchableOpacity onPress={voltar}>
                        <MaterialIcons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            <Text></Text>
            <TouchableOpacity onPress={adicionar}>
                        <MaterialIcons name="add" size={24} color="white" />
            </TouchableOpacity>
        </View>
  
       <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={perfil}
        renderItem={ ({item}) => <ListaAlunos data={item} detalhe={() => editar(item)} />}
        />
        <View style={{height: 60}}></View>
    </View>
    )
}

export default Perfil;
