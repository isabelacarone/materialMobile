import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const Product = ({ name, price, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', // Corrigido de alignItens para alignItems
    marginBottom: 20
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  price: {
    fontSize: 16,
    color: 'gray'
  }
});

export default Product;
