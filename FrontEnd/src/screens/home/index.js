import React, { useEffect, useState } from 'react';
import { ScrollView, Text, TextInput, View, TouchableOpacity, FlatList, Image} from 'react-native';
import { styles } from './styles';
import { ip } from '../../ip';
import { useFocusEffect } from '@react-navigation/native';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts();//carregando a lista de produtos
  }, []);

  useFocusEffect(
    React.useCallback(() => {
        fetchProducts();
    }, [])
  );

  const fetchProducts = async () => { //GET para buscar os produtos
    try {
      const response = await fetch(ip+'/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer}>
      {/* <Image source={{ uri: ip+`/${imagePath}` }} /> */}
      <Image
        soucer={'./uploads/imagem_exemplo.jpg'} 
          // source={{ uri:`https://th.bing.com/th/id/R.802aca03fbd6935e021de0db11529460?rik=54nFDTP7qSKYqQ&pid=ImgRaw&r=0` }} // Construct the full URL
        style={styles.itemImage} // Estilo da imagem
      />
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemPrice}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.buscar}
          placeholder='Pesquisar produto...'
          autoCapitalize='none'
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
        //Filtra a lista de produtos com base no texto de busca (search
          data={products.filter(product => product.nome.toLowerCase().includes(search.toLowerCase()))}
          renderItem={renderItem}//cada item filtrado será renderizado
          keyExtractor={item => item.id.toString()}//chave única para cada item na lista usando o ID do produto
        />
      </View>
    </ScrollView>
  );
}