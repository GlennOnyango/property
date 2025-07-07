import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { Bell, Building2, Home, LogOut, UserCog } from "lucide-react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.text.primary,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Aptly",
          tabBarIcon: ({ color }) => <Home size={28} color={color} />,
          headerShown: true, // Show header for this tab
          headerStyle: {
            backgroundColor: Colors.background.secondary,
          },

          headerRight: () => (
            <Link href="/logout" asChild>
              <Pressable>
                {({ pressed }) => (
                  <LogOut
                    size={25}
                    color={Colors.text.primary}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Apartments",
          tabBarIcon: ({ color }) => <Building2 size={28} color={color} />,
          headerShown: true, // Hide header for this tab
          headerStyle: {
            backgroundColor: Colors.background.secondary,
          },
          headerRight: () => (
            <Link href="/logout" asChild>
              <Pressable>
                {({ pressed }) => (
                  <LogOut
                    size={25}
                    color={Colors.text.primary}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <Bell size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="four"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <UserCog size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
