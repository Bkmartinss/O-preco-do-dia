import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TextInput, View  } from 'react-native';
import { styles } from '../../app/styles/styles';

import { Link } from 'expo-router';

export default function Registrar() {
  return (
    <View style={styles.container}> 
      <View style={styles.formContainer}>        
        <Text style={styles.textTitle}>Email</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
        />
        <Text style={styles.textTitle}>Senha</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
        />
        <Text style={styles.textTitle}>Nome Completo</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
        />
        <Text style={styles.textTitle}>Usuário</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
        />

        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>

    </View>

    <StatusBar style="auto" />
  </View>
  );
}