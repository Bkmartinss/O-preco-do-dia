import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function Home({ navigation }){
  return(
    <View style={styles.container}>
      <TextInput style={styles.buscar}
        placeholder='Pesquisar produto...'
        autoCapitalize='none'
      />
    </View>
  );
}

