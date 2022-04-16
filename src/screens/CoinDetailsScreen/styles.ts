import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },

  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 50,
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  coinTitle: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  symbol: {
    color: "#6b6b6b",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 15,
  },
  label: {
    color: "#6b6b6b",
    marginBottom: 5,
  },
  value: {
    fontSize: 24,
  },
  changeContainer: {
    flexDirection: "row",
  },
  valueContainer: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
export default styles;
