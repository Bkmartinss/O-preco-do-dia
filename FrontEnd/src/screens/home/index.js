import React from 'react';
import { Pressable, TextInput, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default props => (
  <View style={styles.container}>
    <TextInput style={styles.buscar}
      placeholder='Pesquisar produto...'
      autoCapitalize='none'
    />
  </View>
)
