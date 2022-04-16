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
        //marginLeft: 40,
    },
    label: {
       fontSize: 18,
       fontWeight: 'bold',
       
    },
});
export default styles;