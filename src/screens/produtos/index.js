import React, { useState } from 'react';
import { Pressable, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; 

export default function Produtos({ navigation }) {
  // const navigation = useNavigation()
  const [selectedValue, setSelectedValue] = useState('option1');

  return(
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.textTitle}>Local *</Text>

        <View style={styles.subContainerValue}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Opção" value="option1" />
          </Picker>
        </View>

        {/* <View style={styles.subContainerLocal}>
          <Text style={styles.textLink}
            onPress={() => {console.log("Navegando para: Local"); navigation.navigate('Local')}}
          >Sugerir local</Text>
        </View> */}
        
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

        <Text style={styles.textTitle}>Foto *</Text>
        
        <View style={styles.subContainerFoto}>
          <Pressable style={styles.formButtonFoto}>
            <Text style={styles.textButtonFoto}>Adcionar Foto</Text>
          </Pressable>
          <TextInput style={styles.formInput}
              placeholder='Value'
              autoCapitalize='none'
          />
        </View>
        <Pressable style={styles.formButton}>
          <Text style={styles.textButton}>Salvar</Text>
        </Pressable>
      </View>

    </View>
  );
}