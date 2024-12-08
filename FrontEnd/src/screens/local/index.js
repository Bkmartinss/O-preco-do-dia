import React, { useState }from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { ip } from '../../ip';

export default function Local({ navigation }) {
  const [message, setMessage] = useState('');
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setlogradouro] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const handleSave = async () => {
    await fetch(ip+'/locations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome: nome,
        cep: cep,
        logradouro: logradouro,
        numero: numero,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      }),
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      if (data && data.statusCode == 201) {
        navigation.navigate('Home');
        setMessage('Local criado com sucesso!'); 
      } else {
        console.log("Erro");
        setMessage('Erro ao tentar criar local!'); 
      }
    })
    .catch(error => console.error('Error:', error));
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
        <Text style={styles.textTitle}>CEP</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setCep}
        />
        <Text style={styles.textTitle}>Logradouro</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setlogradouro}
        />
        <Text style={styles.textTitle}>N°</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setNumero}
        />
        <Text style={styles.textTitle}>Bairro</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setBairro}
        />
        <Text style={styles.textTitle}>Cidade</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setCidade}
        />
        <Text style={styles.textTitle}>Estado</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          onChangeText={setEstado}
        />
      
        <Pressable style={styles.formButton} onPress={handleSave}>
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
          
    </View>
  );
}