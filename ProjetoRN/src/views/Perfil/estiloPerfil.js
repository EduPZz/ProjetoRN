import { StyleSheet } from 'react-native';

const estiloPerfil = StyleSheet.create({
   container: {   
      flex: 1,
      backgroundColor: '#B2DFC3'   
   },
   header: {
      height: 115,
      width: '100%',
      justifyContent: 'center',   
      alignItens: 'center',
      position: 'absolute',
      alignItems: 'center'
   },
   texto: {
      fontSize: 44,
      color: '#FFFFFF',
      fontFamily: 'Sitka-Text',
      textAlign: 'center'      
   },
   titulo: {
      textAlign: 'center',
      fontFamily: 'Sitka-Text',
      fontSize: 28,
      paddingTop: 15
   },
   ceoPerfil: {
      paddingTop: 10
   },
   ceoFoto: {
       justifyContent: 'center',
       height: 157
   },
   ceoDesc: {
       flexDirection: 'row',
       justifyContent: 'center',
       textAlign: 'center',
       paddingTop: 5
    },
   ceoNome: {
        fontFamily: 'Times-New-Roman',
        fontSize: '20'
   },
   ceoIcon: {
       height: 42, 
       paddingLeft: 30
   },
   ceoSala: {
       flexDirection: 'column',
       justifyContent: 'center',
       textAlign: 'center',
       paddingTop: 20
   },
   salaIcon: {
       height: 62, 
       paddingLeft: 62
   }, 
   sala: {
       color: '#CA419C',
       fontFamily: 'Calisto-MT',
       fontSize: 35
   }
});

  export default estiloPerfil;