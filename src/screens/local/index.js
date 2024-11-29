import React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default props => (
  <View style={styles.container}>    
    <View style={styles.formContainer}>        
      <Text style={styles.textTitle}>Nome *</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>CEP</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>Logadouro</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>N°</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>Bairro</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>Cidade</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>Estado</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
    
      <Pressable style={styles.formButton}>
        <Text style={styles.textButton}>Salvar</Text>
      </Pressable>
    </View>
        
  </View>
)