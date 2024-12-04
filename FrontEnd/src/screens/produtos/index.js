import React, { useState, useEffect } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';

export default function Produtos({ navigation }) {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedLocation, setSelectedLocation] = useState(''); //local
  const [selectedCategory, setSelectedCategory] = useState(''); //categoria
  const [locations, setLocations] = useState([]); //local list
  const [categories, setCategories] = useState([]); //categoria list
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [observacao, setObservacao] = useState('');

  useEffect(() => {
    fetchLocations(); //lista local
    fetchCategories(); //lista categoria
  }, []);

  const fetchLocations = async () => { //requisição GET p API - locais
    try {
      const response = await fetch('http://127.0.0.1:3000/locations');
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchCategories = async () => { //requisição GET p API - categoria
    try {
      const response = await fetch('http://127.0.0.1:3000/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleSave = async () => {  
    const formData = new FormData(); //dados do produto
    formData.append('localId', selectedLocation);
    formData.append('nome', nome);
    formData.append('preco', preco);
    formData.append('categoriaId', selectedCategory);
    formData.append('observacao', observacao);

    await fetch('http://127.0.0.1:3000/products', { //requisição POST
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data && data.statusCode == 201) {
        navigation.navigate('Home'); //tela Home
      } else {
        console.log("Erro");
      }
    })
    .catch(error => console.error('Error:', error));
  };

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textTitle}>Local *</Text>

        <View style={styles.pickerContainer}>
          <Picker //dropdown 
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
          >
            {locations.map((location) => (
              <Picker.Item key={location.id} label={location.nome} value={location.id} />
            ))}
          </Picker>
        </View>

        <View style={styles.subContainerLocal}>
          <Text style={styles.textLink}
            onPress={() => {navigation.navigate('LocalTab')}}
          >Sugerir local</Text>
        </View>
        
        <Text style={styles.textTitle}>Nome *</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setNome} 
        />

        <Text style={styles.textTitle}>Preço *</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setPreco}
        />

        <Text style={styles.textTitle}>Categoria *</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            {categories.map((category) => (
              <Picker.Item key={category.id} label={category.nome} value={category.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.textTitle}>Observação</Text>
            <TextInput style={styles.formInputObs}
              placeholder='Value'
              autoCapitalize='none'
              onChangeText={setObservacao}
        />

        <Text style={styles.textTitle}>Foto *</Text>
        
        <View style={styles.subContainerImage}>
        </View>

        <Pressable style={styles.formButton} onPress={handleSave}>
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>
      </View>

    </View>
  );
}