import React, { useEffect, useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, FlatList} from 'react-native';
import { styles } from './styles';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchProducts();//carregando a lista de produtos
  }, []);

  const fetchProducts = async () => { //GET para buscar os produtos
    try {
      const response = await fetch('http://127.0.0.1:3000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const renderItem = ({ item }) => ( //Renderiza cada item da lista como um TouchableOpacity
    <TouchableOpacity style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.nome}</Text>
      <Text style={styles.itemPrice}>{item.preco}</Text>
    </TouchableOpacity>
  );

  return (
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
  );
}