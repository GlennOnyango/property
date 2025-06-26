import { StyleSheet } from "react-native";
import { View } from "@/components/Themed";
import RegistrationCard from "./components/registrationCard";
import Colors from "@/constants/Colors";

export default function Registration() {
  return (
    <View style={styles.container}>
      <RegistrationCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: Colors.background.primary,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
