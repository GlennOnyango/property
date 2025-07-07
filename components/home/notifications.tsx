import { ImageBackground, StyleSheet, View } from "react-native";

import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { Card } from "tamagui";

export default function NotificationsHome() {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 2,
          paddingEnd: 20,
        }}
      >
        <Text style={styles.regularText}>Upcoming Bill</Text>
        <Text style={styles.boldText}>Rent Due</Text>
        <Text style={styles.regularText}>
          Pay your rent by the 5th of every month to avoid late fees.
        </Text>
      </View>

      <Card
        style={{
          flex: 1,
          height: "100%", // 👈 add height for ImageBackground to show
        }}
        elevate
      >
        <ImageBackground
          source={{
            uri: "https://cdn.confident-group.com/wp-content/uploads/2023/07/20093309/Elevation-slider-fairfield.jpg",
          }}
          style={{
            flex: 1,
            justifyContent: "flex-end", // move text to bottom
          }}
        ></ImageBackground>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  boldText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.text.primary,
  },
  regularText: {
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: 10,
    color: Colors.text.primary,
  },
});
