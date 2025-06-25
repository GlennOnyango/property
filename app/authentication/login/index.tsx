import { StyleSheet } from "react-native";

import { View } from "@/components/Themed";
import LoginCard from "./components/EditScreenInfo";
import FormSetUp from "@/components/FormSetUp";
import Colors from "@/constants/Colors";

export const options = {
  title: "Login",
};

export default function Login() {
  return (
    <FormSetUp>
      <View style={styles.container}>
        <LoginCard />
      </View>
    </FormSetUp>
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
