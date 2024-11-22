import { StatusBar } from 'expo-status-bar';
import { Pressable, Text, TextInput, View  } from 'react-native';
import { styles } from './styles';

export default props => (
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

  </View>
)