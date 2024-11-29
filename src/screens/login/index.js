import React from 'react';
import { Pressable, Text, TextInput, View, Image } from 'react-native';
import { styles } from './styles';

export default function Login({ navigation }){
  const[ user, setUser ] = React.useState(' ')
  const[ pass, setPass] = React.useState(' ')
  
  return(
    <View style={styles.container}>
      <Image  
        source={require('../../../assets/logo.png')}
        style={styles.logo} 
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>
          
        <Text style={styles.textTitle}>Usuário</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none' 
          onChangeText={setUser}
        />
        <Text style={styles.textTitle}>Senha</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          secureTextEntry={true}
          onChangeText={setPass}
        />
      
        <Pressable style={styles.formButton} onPress={() => fazerLogin(user, pass)}>
          <Text style={styles.textButton}> Entrar</Text>
        </Pressable>

        <View style={styles.subContainer}>
          <Text style={styles.textLink}
            onPress={() => navigation.navigate('Cadastro')}
          >Registrar</Text>
        </View>

      </View>

    </View>
  )
}

async function fazerLogin(user, pass){
  await fetch('http://192.168.0.102:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: user,
      password: pass
    }),
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(data => validaLogin(data))
  .catch(error => console.error('Error:', error));
}


async function validaLogin(res) {
  if (res && res.statusCode == 200) {
    navigation.navigate('Home');
  } else {
    console.log("Erro");
  }
  console.log(res ? res.statusCode : 'No response');
}


