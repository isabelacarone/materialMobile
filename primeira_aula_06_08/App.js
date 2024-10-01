// código da primeira aula mobile 06/08

import { SafeAreaView, Text, View } from 'react-native';
// importando as características do react-native, precisamos declarar de onde estamos importando elas 

import AppStyles from './styles/AppStyles'
// qual pasta estamos pegando elas; './style/AppStyles' ./pasta/arquivo

export default function App() {
  return (
    <View style={ AppStyles.container }> 
      <View style={ AppStyles.cabecalho }> 
        <Text>
          header 
        </Text>
      </View>
      <View style={ AppStyles.corpo }>
        <Text>
         body
        </Text>
      </View>
      <View style={ AppStyles.rodape }>
        <Text>
          footer
        </Text>
      </View>
    </View>
  );
}

// seguimos o padrão de hierarquia normal de códigos com as chaves abertas e suas sucessões

// o text exibe o texto na tela e o view é um container padrão do react, ele é usado para estilizar uma View (a qual foi citada no import)

// e também determinamos o styles abrino chaves e selecionando a classe referente ao estilo a ser usado
