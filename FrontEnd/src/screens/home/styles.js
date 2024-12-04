import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    buscar:{
        width: '90%', // Largura 
        borderWidth: 1, // Borda 
        borderColor: '#ccc', // Cor borda
        fontSize: 18, // Fonte
        padding: 10, // Espaço interno
        borderRadius: 30, // Bordas arredondadas
        marginTop: '5%',
        marginBottom: '8%',
    },
    itemContainer:{
        alignItems: 'center',
        width: '100%',
        padding: 20,
        borderWidth: 1,
        borderRadius: 10, 
        borderBottomColor: '#fff',
        marginTop: '5%',
        marginBottom: '8%',
    },
    itemName:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    itemPrice:{
        fontSize: 40,
        fontWeight: 'bold',
        color:'green',
    }
});