import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { styles }from '../styles/styles'

// const img = new Image(); // Isso é correto

export default function Login() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo} 
      />

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Login</Text>
        
        <Text style={styles.textTitle}>Usuário</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
          secureTextEntry={true} 
        />
        <Text style={styles.textTitle}>Senha</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
        />

        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Entrar</Text>
        </Pressable>

        <View style={styles.subContainer}>
          <Pressable style={styles.subButton}>
            <Text style={styles.subTextButton}>Registrar</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
