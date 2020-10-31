import { StyleSheet } from 'react-native';

const estiloCamisetas = StyleSheet.create({
   container: {
       flex: 1
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
    }
});

  export default estiloCamisetas;