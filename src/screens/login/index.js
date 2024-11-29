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

function fazerLogin(user, pass){
  fetch('192.168.0.102:3000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      
      email: user,
      password: pass,
      
    }),
    
  })
  .then(res => console.log(res.json()))
}

