import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    logo: {
        width: '100%', // Largura
        height: '25%', // Altura ocupa 30%
        resizeMode: 'contain', // Ajustar imagem
        marginBottom: '10%', 
        marginTop: '15%',
    },

    formContainer: {
        alignItems: 'center',
        width: '100%', // Conteúdo toda a largura
    },

    formTitle: {
        fontSize: 35, // Fonte
        textAlign: 'center', 
        marginBottom: '3%', 
    },

    textTitle: {
        fontSize: 18, 
        alignSelf: 'flex-start', // Texto esquerda
        marginLeft: '5%', // Alinhar inputs
        marginBottom: '2%', 
    },

    formInput: {
        width: '90%', // Largura inputs
        borderWidth: 1, // Borda inputs
        borderColor: '#ccc', // Cor borda
        fontSize: 18, // Fonte
        padding: 10, // Espaço interno
        borderRadius: 10, // Bordas arredondadas
        marginBottom: 10, 
    },

    formButton: {
        width: '90%', // Largura igual inputs
        backgroundColor: 'green', // Cor botão
        alignItems: 'center', 
        padding: 10, // Espaço interno do botão
        borderRadius: 15, 
        marginTop: 10, // Espaço acima do botão
        marginBottom: 10, // Espaço acima do botão
    },

    textButton: {
        color: 'white', // Texto
        fontSize: 20, // Tamanho
    },

    subContainer: {
        marginTop: 40, // Espaço acima do link
    },

    textLink: {
        color: 'blue', // Cor link
        fontSize: 16, // Tamanho
        textDecorationLine: 'underline', // Sublinhado
        textAlign: 'center', // Centralizado
    },
});