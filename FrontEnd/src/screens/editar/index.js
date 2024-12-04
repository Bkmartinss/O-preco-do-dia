import React from 'react';
import { View, Text, TextInput, Image, Pressable } from 'react-native';
import { styles } from './styles';

export default function Editar({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../../assets/perfil.png')} 
                    style={styles.profileImage}
                />
            <Text style={styles.profileName}>Nome</Text>
            </View>

            <View style={styles.subcontainer}>
                <Text style={styles.textTitle}>Nome *</Text>
                <TextInput style={styles.formInput}
                    placeholder='Value'
                    autoCapitalize='none'
                />
                <Text style={styles.textTitle}>Email</Text>
                <TextInput style={styles.formInput}
                    placeholder='Value'
                    autoCapitalize='none'
                />
                <Text style={styles.textTitle}>CPF</Text>
                <TextInput style={styles.formInput}
                    placeholder='Value'
                    autoCapitalize='none'
                />
                <Text style={styles.textTitle}>Senha</Text>
                <TextInput style={styles.formInput}
                    placeholder='Value'
                    autoCapitalize='none'
                />
                <Text style={styles.textTitle}>Telefone</Text>
                <TextInput style={styles.formInput}
                    placeholder='Value'
                    autoCapitalize='none'
                />
                <Pressable style={styles.formButton} 
                    onPress={() => navigation.navigate('Perfil')}
                >
                    <Text style={styles.textButton}>Salvar</Text>
                </Pressable>
            </View>
        </View>
    );
}
