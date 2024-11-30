import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: '3%',
    },

    formContainer: {
        flex: 1, // Espaço disponível abaixo da logo
        alignItems: 'center', // Centraliza horizontalmente
        width: '100%', // Conteúdo toda a largura
    },

    textTitle: {
        fontSize: 20, 
        alignSelf: 'flex-start', // Texto esquerda
        marginLeft: '5%', // Alinhar inputs
        marginBottom: 10, 
    },

    formInput: {
        width: '90%', // Largura inputs
        borderWidth: 1, // Borda inputs
        borderColor: '#ccc', // Cor borda
        fontSize: 18, // Fonte
        padding: 10, // Espaço interno
        borderRadius: 5, // Bordas arredondadas
        marginBottom: 10, 
    },

    formButton: {
        width: '90%', // Largura igual inputs
        backgroundColor: 'green', // Cor botão
        alignItems: 'center', 
        padding: 10, // Espaço interno do botão
        borderRadius: 15, 
        marginTop: 5, // Espaço acima do botão
    },

    textButton: {
        color: 'white', // Texto
        fontSize: 18, // Tamanho
    },
});