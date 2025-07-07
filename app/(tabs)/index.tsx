import { ScrollView, StyleSheet, View } from "react-native";

import { Text } from "@/components/Themed";
import Colors from "@/constants/Colors";
import {
  Hammer,
  KeyRound,
  MessageCircleMore,
  ReceiptText,
} from "lucide-react-native";
import NotificationsHome from "@/components/home/notifications";
import ApartmentHome from "@/components/home/apartment";

export default function TabOneScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: Colors.background.primary }} // ✅ background color here
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
      }}
      showsVerticalScrollIndicator={false}
    >
      <Text style={{ ...styles.title, marginBottom: 24 }}>Welcome, Aisha</Text>

      <NotificationsHome />

      <View style={{ marginBottom: 24 }}>
        <Text style={{ ...styles.title, marginBottom: 24 }}>Quick Actions</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 20,
            marginBottom: 12,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              height: 50,
              borderRadius: 8,
              borderColor: Colors.card.border,
              backgroundColor: Colors.background.secondary,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <KeyRound size={24} />
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                Access
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              height: 50,
              borderRadius: 8,
              borderColor: Colors.card.border,
              backgroundColor: Colors.background.secondary,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Hammer size={24} />
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                Maintenance
              </Text>
            </View>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              height: 50,
              borderRadius: 8,
              borderColor: Colors.card.border,
              backgroundColor: Colors.background.secondary,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <ReceiptText size={24} />
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                Pay
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              flex: 1,
              height: 50,
              borderRadius: 8,
              borderColor: Colors.card.border,
              backgroundColor: Colors.background.secondary,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
              }}
            >
              <MessageCircleMore size={24} />
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                Contact
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text style={{ ...styles.title, marginBottom: 24 }}>My Apartment</Text>
        {Array.from({ length: 5 }).map((_, index) => (
          <ApartmentHome key={index} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: Colors.background.primary, // Light background for contrast
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
