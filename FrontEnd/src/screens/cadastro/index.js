import React from 'react';
import { Pressable, Text, TextInput, View  } from 'react-native';
import { styles } from './styles';

export default function Cadastro({ navigation }) {
  const[ email, setEmail ] = React.useState(' ');
  const[ pass, setPass]  = React.useState(' ');
  const[ fullName, setFullName ] = React.useState(' ');
  const[ userName, setUserName]  = React.useState(' ');
  
  return(
    <View style={styles.container}> 
      <View style={styles.formContainer}>        
        <Text style={styles.textTitle}>Email</Text>
        <TextInput style={styles.formInput}
          placeholder='Digite seu email...'
          autoCapitalize='none'
          onChangeText={setEmail}
        />
        <Text style={styles.textTitle}>Senha</Text>
        <TextInput style={styles.formInput}
          placeholder='Digite sua senha...'
          autoCapitalize='none'
          onChangeText={setPass}
        />
        <Text style={styles.textTitle}>Nome Completo</Text>
        <TextInput style={styles.formInput}
          placeholder='Digite seu nome completo...'
          autoCapitalize='none'
          onChangeText={setFullName}
        />
        <Text style={styles.textTitle}>Usuário</Text>
        <TextInput style={styles.formInput}
          placeholder='Digite seu usuário...'
          autoCapitalize='none'
          onChangeText={setUserName}
        />

        <Pressable 
          style={styles.formButton} 
          onPress={() => fazerCadastro(email, pass, fullName, userName, navigation)}
          >
          <Text  style={styles.textButton}>Salvar</Text>
        </Pressable>
        
      </View>

    </View>
  );
}

async function fazerCadastro(email, pass, fullName, userName, navigation){
  await fetch('http://127.0.0.1:3000/cadastro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: email,
      password: pass,
      fullName: fullName,
      userName: userName
    }),
  })
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then((data) => validaCadastro(data, navigation))
  .catch((error) => console.error('Error:', error));
}


async function validaCadastro(res, navigation) {
  if (res && res.statusCode == 201) {
    navigation.replace('Login');
  } else {
    console.log("Erro");
  }
  console.log(res ? res.statusCode : 'No response');
}