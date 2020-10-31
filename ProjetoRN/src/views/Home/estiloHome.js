import { StyleSheet } from 'react-native';

const estiloHome = StyleSheet.create({
   container: {   
      flex: 3,
      justifyContent: 'center',   
      alignItens: 'center'
   },
  
   fundo: {
       flexDirection: 'column',
       justifyContent: 'space-evenly',
       alignItems: 'center',
       width: '100%',
       height: '100%'
   },
   botaoBackground:{
        width: 140,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItens: 'center',
        padding: 10,
        borderWidth: 1
   },
   botao1: {
      opacity: 0.5,
      borderRadius: 100,
      backgroundColor:'black',
      paddingLeft: 20,
      paddingRight: 20
   },
   
   botao2: {
      opacity: 0.5,
      borderRadius: 100,
      backgroundColor:'white',
      textAlign: 'center'
   },
   botaoTexto1: {
      fontSize: 35,
      color: '#FFFFFF',
      fontFamily: 'Sitka-Text'
   },
   botaoTexto2: {
      fontSize: 35,
      color: 'black',
      fontFamily: 'Sitka-Text'
   },
   texto: {
      fontFamily: 'Sitka-Text',
      fontSize: 60,
      color: 'white'
   },
   caixaTexto: { 
       backgroundColor:'white', 
       opacity: 0.3,
       fontFamily: 'Sitka-Text',
       fontSize: 25,
       textAlign: 'center'
   }
});

  export default estiloHome;