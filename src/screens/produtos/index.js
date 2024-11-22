import React from 'react';
import { Pressable, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default props => (
  <View style={styles.container}>
    <View style={styles.formContainer}>
      <Text style={styles.textTitle}>Local *</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
        secureTextEntry={true} 
      />
      <View style={styles.subContainerLocal}>
        <Pressable style={styles.subButton}>
          {/* <Link href={"/local"} style={styles.linklocal}>Sugerir Local</Link> */}
        </Pressable>
      </View>
      <Text style={styles.textTitle}>Nome *</Text>
        <TextInput style={styles.formInput}
          placeholder='Value'
          autoCapitalize='none'
        />
      <Text style={styles.textTitle}>Preço *</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>Categoria *</Text>
      <TextInput style={styles.formInput}
        placeholder='Value'
        autoCapitalize='none'
      />
      <Text style={styles.textTitle}>Observação</Text>
          <TextInput style={styles.formInputObs}
            placeholder='Value'
            autoCapitalize='none'
      />
      <View style={styles.subContainerFoto}>
        <Text style={styles.textTitle}>Foto *</Text>
        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Adcionar Foto</Text>
        </Pressable>
        <TextInput style={styles.formInput}
            placeholder='Value'
            autoCapitalize='none'
        />

        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>
      </View>

    </View>

  </View>
)