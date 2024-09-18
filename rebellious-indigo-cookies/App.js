import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Product from './components/Product'; // Certifique-se de que o caminho está correto e o nome está com a inicial maiúscula

export default function App() {
  const product = {
    image: 'https://cdn.ome.lt/9fTTt4R6ScdlsYAtas9cIFO1T2s=/987x0/smart/uploads/conteudo/fotos/ahsoka-anakin-hayden-christensen-feliz.jpg',
    name: 'anakin',
    price: 'indefinido'
  };

  return (
    <SafeAreaView style={styles.container}>
      <Product image{...product} /> {/* Use o componente com a inicial maiúscula */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  }
});
