import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        padding: 20,
        backgroundColor: '#fff',
    },
    image: {
        height: 175,
        resizeMode: 'contain',
    },
    balanceContainer:{
        marginVertical: 20,
        width: "100%",
    },
    label: {
       fontSize: 18,
       fontWeight: 'bold',
       color: '#585858',
    },
    balance: {
        fontSize: 36,
        fontWeight: 'bold',
    },
});
export default styles;