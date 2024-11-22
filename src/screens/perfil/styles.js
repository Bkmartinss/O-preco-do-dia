import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    profileContainer: {
      alignItems: 'center',
      marginBottom: 20,
      backgroundColor: 'green',
    },

    subContainer:{
      paddingHorizontal: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginTop: '5%',
      marginBottom: '5%',
    },
    profileName: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: '2%',
    },
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
    },
    textContainer: {
      marginLeft: 10,
    },
    itemTitle: {
      fontSize: 16,
      fontWeight: '600',
    },
    itemDescription: {
      fontSize: 14,
      color: '#777',
    },
    divider: {
      height: 1,
      backgroundColor: '#ccc',
      marginVertical: 10,
    },
});