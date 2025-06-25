import Colors from "@/constants/Colors";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Colors.background.secondary },
        headerTintColor: Colors.text.primary,
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="login/index"
        options={{ headerShown: true, title: "Login" }}
      />
      <Stack.Screen
        name="registration/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="forgot-password/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="reset-password/index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
