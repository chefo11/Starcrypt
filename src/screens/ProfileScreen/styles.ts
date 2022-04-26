import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
  },
  userContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    marginVertical: 10,
    alignItems: "center",
    width: "100%",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    alignItems: "flex-end",
  },
  coinTitle: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontWeight: "600",
    marginBottom: 5,
    color: "#999",
  },
  value: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  image: {
    height: 175,
    resizeMode: "contain",
  },
  userImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 50,
  },
  balanceContainer: {
    marginVertical: 20,
    width: "100%",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#585858",
  },
  balance: {
    fontSize: 36,
    fontWeight: "bold",
  },
  button: {
    marginTop: "auto",
    marginBottom: 10,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fffafa",
  },
});
export default styles;
