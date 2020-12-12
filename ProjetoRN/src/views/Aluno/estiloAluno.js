import { StyleSheet } from 'react-native';

const estiloAluno = StyleSheet.create({
   container: {   
      flex: 1, 
   },
   header: {   
      height: 115,
      width: '100%',
      justifyContent: 'center',   
      alignItens: 'center',
      position: 'absolute',
      alignItems: 'center'
   },
   formularioContainer: {
      flex: 1,
      justifyContent: 'center',
   },
   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: 'center',
      justifyContent:'center',
   },
   textoH: {
      fontSize: 44,
      color: '#FFFFFF',
      fontFamily: 'Sitka-Text',
      textAlign: 'center'
   },  
   check: {
      height: 40,
      width: 40,
      padding: 8
   },
   ceoIcon: {
       height: 35,
       width: 35,
       paddingRight: 5
   },
   campoContainer: {
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 50, 
      paddingRight: 50,
      margin: 5,
      marginRight: 50,
      alignItems: 'center', 
   },
   campoContainerDescricao: {
      flexDirection: 'row',
      padding: 5,
      paddingLeft: 45, 
      paddingRight: 40,
      margin: 5,
   },
   campo: {
      width: '100%',
      fontSize: 18,
      color: 'white',
      backgroundColor: '#F5C1EB',
      marginLeft: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#716F71',
      borderRadius: 5,
   },
   campoDescricao: {
      width: '90%',
      height: 100,
      fontSize: 18,
      color: '#FFFFFF',
      backgroundColor: '#F5C1EB',
      marginLeft: 15,
      padding: 10,
      borderWidth: 1,
      borderColor: '#716F71',
      borderRadius: 5,
      textAlignVertical: 'top',
   },
   campoDescricaoScroll: {
      width: '100%',
   },
   botoesContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 50,
   },
   botaoContainer: {
      alignItems: 'center',
      padding: 5,
   },
   botao: {
      width: 50,
      height: 50,
      borderRadius: 10, 
      justifyContent: 'center',
      alignItems: "center",
      padding: 10, 
   },
   botoes:  {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
   }
});

export default estiloAluno;