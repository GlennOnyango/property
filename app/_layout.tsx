import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
import { createTamagui, TamaguiProvider } from "tamagui";
import { defaultConfig } from "@tamagui/config/v4"; // for quick config install this
import Colors from "@/constants/Colors";
import { StatusBar } from "expo-status-bar";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "authentication",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style="dark" backgroundColor={Colors.background.secondary} />
      <TamaguiProvider config={createTamagui(defaultConfig)}>
        <ThemeProvider
          value={colorScheme === "light" ? DarkTheme : DefaultTheme}
        >
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: Colors.background.secondary },
              headerTintColor: Colors.text.primary,
              headerTitleStyle: { fontWeight: "bold" },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="authentication"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="(tabs)"
              options={{
                headerShown: false,
                headerStyle: { backgroundColor: Colors.background.secondary },
              }}
            />
            <Stack.Screen name="modal" options={{ presentation: "modal" }} />
            <Stack.Screen name="logout" options={{ presentation: "modal" }} />
          </Stack>
        </ThemeProvider>
      </TamaguiProvider>
    </>
  );
}
