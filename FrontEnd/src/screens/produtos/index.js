import React, { useState, useEffect } from 'react';//estado e efeitos
import { ScrollView, Pressable, Text, TextInput, View, Image } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ip } from '../../ip';
import { useFocusEffect } from '@react-navigation/native';

//estado e efeitos
export default function Produtos({ navigation }) {
  const [message, setMessage] = useState(''); //mensagem do sistema
  const [selectedLocation, setSelectedLocation] = useState(''); //local
  const [selectedCategory, setSelectedCategory] = useState(''); //categoria
  const [locations, setLocations] = useState([]); //local list
  const [categories, setCategories] = useState([]); //categoria list
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [observacao, setObservacao] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchLocations(); //lista local
    fetchCategories(); //lista categoria
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fetchLocations(); 
      fetchCategories();
    }, [])
  );

  const fetchLocations = async () => { //requisição GET p API - locais
    try {
      const response = await fetch(ip+'/locations');
      const data = await response.json();
      setLocations(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    }
  };

  const fetchCategories = async () => { //requisição GET p API - categoria
    try {
      const response = await fetch(ip+'/categories');
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const captureImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };
  
    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image capture');
      } else if (response.errorMessage) {
        console.error('Error capturing image:', response.errorMessage);
      } else {
        const capturedImage = response.assets[0];
        setImage(capturedImage);
        console.log('Captured Image:', capturedImage.uri);
      }
    });
  };

  const handleSave = async () => {
    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('preco', preco);
    formData.append('descricao', observacao);
    formData.append('CategoryId', selectedCategory);
    formData.append('LocationId', selectedLocation);
  
    if (image) {
      formData.append('image', {
        uri: image.uri,
        type: image.type,
        name: image.fileName,
      });
    }
  
    console.log('FormData:', formData);
  
    try {
      const token = await AsyncStorage.getItem('token'); // Recupera o token do usuário com AsyncStorage
  
      if (!token) {
        throw new Error('No token found');
      }
  
      const response = await fetch(ip+'/products', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          // 'Content-Type': 'multipart/form-data', // Remove this line
        },
        body: formData,
      });
  
      console.log('Response status:', response.status);
      const data = await response.json();
      console.log('Response data:', data);
  
      if (response.ok && data.statusCode == 201) {
        navigation.navigate('Home');
        setMessage('Produto criado com sucesso!');
      } else {
        console.log("Erro");
        setMessage('Erro ao criar um novo produto!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.textTitle}>Local *</Text>
          <View style={styles.pickerContainer}>
            <Picker //dropdown 
              selectedValue={selectedLocation}
              onValueChange={(itemValue) => setSelectedLocation(itemValue)}
              style={styles.picker}
            >
              {locations.map((location) => (
                <Picker.Item key={location.id} label={location.nome} value={location.id} />
              ))}
            </Picker>
          </View>
          <View style={styles.subContainerLocal}>
            <Text style={styles.textLink} 
              onPress={() => { navigation.navigate('LocalTab') }}>Sugerir local</Text>
          </View>
          <Text style={styles.textTitle}>Nome *</Text>
          <TextInput style={styles.formInput} 
            placeholder='Value' autoCapitalize='none' onChangeText={setNome} />
          <Text style={styles.textTitle}>Preço *</Text>
          <TextInput style={styles.formInput} 
            placeholder='Value' autoCapitalize='none' onChangeText={setPreco} />
          <Text style={styles.textTitle}>Categoria *</Text>
          <View style={styles.pickerContainer}>
            <Picker selectedValue={selectedCategory} 
              onValueChange={(itemValue) => 
              setSelectedCategory(itemValue)} 
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
            onChangeText={setObservacao} />
          <Text style={styles.textTitle}>Foto *</Text>
          <View style={styles.subContainerImage}>
            <Pressable style={styles.formButtonImage} onPress={captureImage}>
              <Text style={styles.textButton}>Capturar Imagem</Text>
            </Pressable>
              {/* <Image
                source={{ uri: captureImage.uri }} //  contém a imagem capturada
                style={{ width: 100, height: 100 }}
              /> */}
              {/* {image && (
              <Image
                source={{ uri: image.uri }}
                style={{ width: 100, height: 100, marginTop: 10 }}
              />
            )} */}
          </View>
          <Pressable style={styles.formButton} onPress={handleSave}>
            <Text style={styles.textButton}>Salvar</Text>
          </Pressable>
          {message ? <Text style={styles.message}>{message}</Text> : null}
        </View>
      </View>
    </ScrollView>
  );
}
