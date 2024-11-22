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

    formTitle: {
        fontSize: 40, // Fonte
        textAlign: 'center', 
        marginBottom: 20, 
    },

    textTitle: {
        fontSize: 20, 
        alignSelf: 'flex-start', // Texto esquerda
        marginLeft: '5%', // Alinhar inputs
        marginBottom: 5, 
    },

    formInput: {
        width: '90%', // Largura inputs
        borderWidth: 1, // Borda inputs
        borderColor: '#ccc', // Cor borda
        fontSize: 18, // Fonte
        padding: 10, // Espaço interno
        borderRadius: 5, // Bordas arredondadas
        marginBottom: 30, 
    },

    formButton: {
        width: '90%', // Largura igual inputs
        backgroundColor: 'green', // Cor botão
        alignItems: 'center', 
        padding: 15, // Espaço interno do botão
        borderRadius: 15, 
        marginTop: 10, // Espaço acima do botão
    },

    textButton: {
        color: 'white', // Texto
        fontSize: 18, // Tamanho
    },

    subContainer: {
        marginTop: 40, // Espaço acima do link
    },
});