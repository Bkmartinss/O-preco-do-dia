import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
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

    subContainerValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center', // Alinha os itens no centro da linha
        marginBottom: 16,
    },

    textLink:{
        color: 'blue', // Cor link
        fontSize: 16, // Tamanho
        textDecorationLine: 'underline', // Sublinhado
        // textAlign: 'left', // Centralizado
    },

    picker: {
        width: '100%',  // Largura do Picker
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    pickerItem: {
        textAlign: 'left', // Alinha dentro do Picker
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

    linklocal: {
        color: 'blue', // Cor link
        fontSize: 16, // Tamanho
        textDecorationLine: 'underline', // Sublinhado
        alignItems: 'flex-start',
    },

    formInputObs:{
        width: '90%', // Largura inputs
        height: 100,
        borderWidth: 1, // Borda inputs
        borderColor: '#ccc', // Cor borda
        fontSize: 18, // Fonte
        padding: 10, // Espaço interno
        borderRadius: 5, // Bordas arredondadas
        marginBottom: 30,
        textAlignVertical: 'top',
    },

    subContainerFoto:{
        alignItems: 'center', 
        width: '90%',
        borderWidth: 1, // Borda inputs
        borderColor: '#ccc', // Cor borda
    },

    formButtonFoto:{
        width: '50%',
        backgroundColor: 'blue',
        alignItems: 'center', 
        padding: 15, // Espaço interno do botão
        borderRadius: 15, 
        marginTop: 10,
        marginBottom: 15,
    },
    textButtonFoto:{
        color: 'white',
    }
});