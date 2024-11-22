import React from 'react';
import { Pressable, Text, TextInput, View, Image, Button } from 'react-native';
import { styles } from './styles';

export default props =>(
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
      <Button style={styles.textButton} title='Entrar' onPress={() => Login.navigation.navigate('Home')}/>

      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          {/* <Link href={"/registrar"} style={styles.link}>Registrar</Link> */}
        </Pressable>
      </View>

    </View>

  </View>
)
