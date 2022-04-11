import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        padding: 20
    },
    image: {
        height: "50%",
        aspectRatio: 1,
    },
    header1: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 50,
        marginBottom: 15, 
    },
    header2: {
        fontSize: 20,
        textAlign: "center",
        color: "#707070",
    },
});
export default styles;