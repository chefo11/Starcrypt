import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    marginVertical: 10,
    color: "#5f5f5f",
  },
  image: {
    height: 200,
    resizeMode: "contain",
  },
  inputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#b1b1b1",
    padding: 15,
    margin: 20,
  },
  button: {
    backgroundColor: "#2f95dc",
    marginTop: "auto",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});
export default styles;
