import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    Camisetas: {
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: 50
    },
    grupoCamiseta: {
        height: 40,
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'Times-New-Roman',
        paddingTop: 25,
        color: '#AF7577',
        marginBottom: 70
    },  
    camisetaPreco: {
        flexDirection: 'row',
        paddingLeft: 25,
        paddingTop: 15
    },
    preco: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Times-New-Roman'
    }
});

export default estiloLista;