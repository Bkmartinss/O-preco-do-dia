import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    logo: {
        width: '100%', // Largura
        marginTop: '10%',
        height: '30%', // Altura ocupa 30%
        resizeMode: 'contain', // Ajustar imagem
        marginBottom: 5, 
    },

    formContainer: {
        flex: 1, // Espaço disponível abaixo da logo
        justifyContent: 'center', // Centraliza verticalmente
        alignItems: 'center', // Centraliza horizontalmente
        width: '80%', // Conteúdo toda a largura
    },

    formTitle: {
        fontSize: 40, // Fonte
        textAlign: 'center', 
        marginBottom: 20, 
    },

    textTitle: {
        fontSize: 20, 
        alignSelf: 'flex-start', // Texto esquerda
        marginLeft: '10%', // Alinhar inputs
        marginBottom: 5, 
    },

    formInput: {
        width: '80%', // Largura inputs
        borderWidth: 1, // Borda inputs
        borderColor: '#ccc', // Cor borda
        fontSize: 18, // Fonte
        padding: 10, // Espaço interno
        borderRadius: 5, // Bordas arredondadas
        marginBottom: 30, 
    },

    formButton: {
        width: '80%', // Largura igual inputs
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

    subTextButton: {
        color: 'blue', // Cor link
        fontSize: 16, // Tamanho
        textDecorationLine: 'underline', // Sublinhado
        textAlign: 'center', // Centralizado
    },
});
