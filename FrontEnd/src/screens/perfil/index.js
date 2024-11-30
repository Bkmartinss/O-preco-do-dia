import React from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './styles';

export default function Perfil({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // URL de exemplo para a foto
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Nome</Text>
      </View>

      <View style={styles.subContainer}>


        <TouchableOpacity style={styles.itemContainer}>
          <Icon name="edit" size={30} color="#000" />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle} 
              onPress={() => navigation.navigate('Editar')}
              >Editar</Text>
            <Text style={styles.itemDescription}>
              Email, Segurança, mudar número
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />
    
        <View style={styles.itemContainer}>
          <Icon name="notifications" size={30} color="#000" />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Notificação</Text>
            <Text style={styles.itemDescription}>Ativar ou desativar notificações</Text>
          </View>
        </View>
        <View style={styles.divider} />
    
        <View style={styles.itemContainer}>
          <Icon name="delete" size={30} color="#000" />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Excluir minha conta</Text>
            <Text style={styles.itemDescription}>
              Remover conta e excluir registros
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
    
        <TouchableOpacity style={styles.itemContainer}>
          <Icon name="logout" size={24} color="#000" />
          <View style={styles.textContainer}>
            <Text style={styles.itemTitle}>Sair</Text>
            <Text style={styles.itemDescription}>
              Fazer Logout do Aplicativo
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.divider} />
      </View>
    </View>
  );
}
