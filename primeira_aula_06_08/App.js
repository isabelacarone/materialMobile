// código da primeira aula mobile 06/08

import { SafeAreaView, Text, View } from 'react-native';

import AppStyles from './styles/AppStyles'

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


