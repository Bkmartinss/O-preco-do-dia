import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    buscar: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize: 18,
        padding: 10,
        borderRadius: 30,
        marginTop: '5%',
        marginBottom: '8%',
    },
    itemContainer: {
        flexDirection: 'row', // Alinha os itens horizontalmente
        alignItems: 'center', // Centraliza verticalmente
        padding: 30,
        borderWidth: 1,
        borderRadius: 10,
        borderBottomColor: '#ccc',
        marginTop: '5%',
        marginBottom: '8%',
        width: '90%', // Ajuste de largura para caber na tela
        alignSelf: 'center', // Centraliza o item na tela
    },
    itemImage: {
        width: 100, // Largura da imagem
        height: 100, // Altura da imagem
        borderRadius: 8, // Bordas arredondadas
        marginRight: 10, // Espaçamento entre a imagem e os detalhes
    },
    itemDetails: {
        flex: 1, // Ocupar o espaço restante
        justifyContent: 'center', // Centraliza verticalmente
    },
    itemName: {
        fontSize: 20,
        padding: 10,
        fontWeight: 'bold',
    },
    itemPrice: {
        fontSize: 40,
        padding: 10,
        fontWeight: 'bold',
        color: 'green',
    },
});
