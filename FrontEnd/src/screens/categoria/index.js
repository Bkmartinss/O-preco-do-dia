import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Categoria({ navigation }) {
  const [nome, setNome] = useState('');
  const [message, setMessage] = useState('');

  const criarCategoria = async (nome) => {
    await fetch('http://127.0.0.1:3000/categories/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
      }),
    })
    .then((res) => {
      if (!res.ok) { //se erro para ser tratado no bloco catch
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => {
      if (data && data.statusCode == 201) { //se == criada com sucesso
        setMessage('Categoria criada com sucesso!'); 
      } else {
        setMessage('Erro ao criar uma nova categoria.');
      }
    })
    .catch((error) => { //registra o erro
      console.error('Error:', error);
      setMessage('Erro ao criar uma nova categoria.');
    });
  };

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>        
        <Text style={styles.textTitle}>Nome *</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setNome}
        />
          
        <Pressable style={styles.formButton} onPress={() => criarCategoria(nome)}>
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
          
    </View>
  )
}