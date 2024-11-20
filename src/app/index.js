import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { styles } from '../../app/styles/styles';

import { Link } from 'expo-router';


export default function Home() {
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
          <Link href={"/home"} style={styles.textButton}>Entrar</Link>
        </Pressable>

        <View style={styles.subContainer}>
          <Pressable style={styles.subButton}>
            <Link href={"/registrar"} style={styles.link}>Registrar</Link>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
