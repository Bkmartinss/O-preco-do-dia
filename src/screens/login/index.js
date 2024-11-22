import React from 'react';
import { Pressable, Text, TextInput, View, Image } from 'react-native';
import { styles } from './styles';

export default function Login({ navigation }){
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
        />
        <Text style={styles.textTitle}>Senha</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          secureTextEntry={true}
        />
      
        <Pressable style={styles.formButton} onPress={() => navigation.navigate('Home')}>
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
