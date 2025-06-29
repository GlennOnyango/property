import { StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { OTPInput } from "@/components/otp";
import { Card } from "tamagui";
import Colors from "@/constants/Colors";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Card style={styles.cardStyle}>
        <Card.Header>
          <Text style={styles.title}>
            A code has been sent to your email, please enter it below to reset
            your password.
          </Text>
        </Card.Header>
        <OTPInput />
        <Card.Footer></Card.Footer>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  cardStyle: {
    padding: 10,
    minWidth: "90%",
    backgroundColor: Colors.card.background,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    maxHeight: "80%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: Colors.text.primary,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
