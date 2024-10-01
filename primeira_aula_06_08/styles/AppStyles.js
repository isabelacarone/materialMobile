import { StyleSheet } from 'react-native';
// precisamos importar o StyleSheet toda vez; essa parte de import do react é padronizado, tudo que usaremos deve ser declarado aqui 

// usamos const já que ela não pode ter seu valor alterado 

// a questão de styles fica bem parecida do que a temos no css

const AppStyles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    margin:0,
    padding: 0
  },
  cabecalho:{
    width: '100%',
    padding: 10,
    paddingTop: 20,
    backgroundColor: '#9382E1',
    alignItems: 'center'
  },
  corpo: {

  },
  rodape:{
    width: '100%',
    padding: 10,
    paddingBottom: 20,
    backgroundColor: '#9382E1',
    alignItems: 'center'
  }
});

export default AppStyles;
