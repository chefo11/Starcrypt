import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between", 
        height: 50,
        marginVertical: 10,
        alignItems: 'center',
    },
    coinTitle:{
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    left: {
        flexDirection: "row",
        alignItems: 'center',
    },
    name: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    symbol: {
        color: '#6b6b6b'
    },
    amount: {},

});
export default styles 