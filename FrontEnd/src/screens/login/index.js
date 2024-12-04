import React from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>

        <Text style={styles.textTitle}>Usuário</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Digite seu usuário..."
          autoCapitalize="none"
          onChangeText={setUser}
        />
        <Text style={styles.textTitle}>Senha</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Digite sua senha..."
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={setPass}
        />

        <Pressable
          style={styles.formButton}
          onPress={() => fazerLogin(user, pass, navigation)}
        >
          <Text style={styles.textButton}> Entrar</Text>
        </Pressable>

        <View style={styles.subContainer}>
          <Text
            style={styles.textLink}
            onPress={() => navigation.navigate('Cadastro')}
          >
            Registrar
          </Text>
        </View>
      </View>
    </View>
  );
}

async function fazerLogin(user, pass, navigation) {
  await fetch('http://127.0.0.1:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userName: user,
      password: pass,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data) => validaLogin(data, navigation))
    .catch((error) => console.error('Error:', error));
}

async function validaLogin(res, navigation) {
  if (res && res.statusCode == 200) {
    try {
      await AsyncStorage.setItem('token', res.token); // Salva o token no AsyncStorage
      console.log(res.token);
      console.log(AsyncStorage.getItem("token"));
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error saving token:', error);
    }
  } else {
    console.log('Erro');
  }
  console.log(res ? res.statusCode : 'No response');
}
