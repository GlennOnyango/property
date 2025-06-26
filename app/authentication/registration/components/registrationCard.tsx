import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import {
    Button,
    Card,
    Form,
    Input,
    Label,
    ScrollView,
    Separator,
    Text,
    XStack,
    YStack,
} from "tamagui"; // or '@tamagui/card'

import Colors from "@/constants/Colors";
import { SelectApartments } from "./Select";

export default function RegistrationCard() {
  const router = useRouter();
  return (
    <Card style={styles.cardStyle}>
      <Card.Header />
      <Card.Footer />

      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <YStack gap="$2" alignItems="center" justifyContent="flex-start">
          <Text style={styles.title}>Create Your Account</Text>

          <Separator alignSelf="stretch" style={styles.separator} />

          <Text style={styles.descriptionText}>
            Welcome to the Login Screen! Please enter your credentials to
            continue.
          </Text>

          <Form style={{ width: "100%", paddingHorizontal: 10 }}>
            <SelectApartments />

            <YStack gap="$1" marginBottom="$2">
              <Label htmlFor="name">House Number</Label>
              <Input
                keyboardType="default"
                placeholder="Please enter your Hse number"
                style={styles.input}
              />
            </YStack>

            <YStack gap="$1" marginBottom="$2">
              <Label htmlFor="name">Name</Label>
              <Input
                keyboardType="default"
                placeholder="Please enter your name"
                style={styles.input}
              />
            </YStack>

            <YStack gap="$1" marginBottom="$2">
              <Label htmlFor="name">ID/Passport Number</Label>
              <Input
                keyboardType="default"
                placeholder="Please enter your ID/Passport number"
                style={styles.input}
              />
            </YStack>

            <YStack gap="$1" marginBottom="$2">
              <Label htmlFor="name">Phone Number</Label>
              <Input
                keyboardType="default"
                placeholder="Please enter your Phone number"
                style={styles.input}
              />
            </YStack>

            <YStack gap="$1" marginBottom="$2">
              <Label htmlFor="password">Password</Label>
              <Input
                keyboardType="visible-password"
                placeholder="Please enter your password"
                style={styles.input}
              />
            </YStack>

            <YStack gap="$1" marginBottom="$2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input
                keyboardType="visible-password"
                placeholder="Please confirm password"
                style={styles.input}
              />
            </YStack>
            <XStack justifyContent="center" alignItems="center" gap={"$2"}>
              <Form.Trigger asChild>
                <Button
                  style={{
                    maxWidth: "50%",
                    minWidth: "50%",
                    backgroundColor: Colors.button.primary,
                    color: Colors.text.secondary,
                  }}
                >
                  Sign Up
                </Button>
              </Form.Trigger>
              <Button
                style={{
                  maxWidth: "50%",
                  minWidth: "50%",
                  backgroundColor: Colors.button.primary,
                  color: Colors.text.secondary,
                }}
                onPress={() => {
                  // Handle sign up action
                  console.log("Sign Up Pressed");
                  router.push("/authentication/login");
                }}
              >
                Sign In
              </Button>
            </XStack>

            <YStack
              justifyContent="center"
              alignItems="center"
              style={{ marginVertical: 20 }}
            >
              <Text
                style={{ color: Colors.text.primary }}
                textDecorationLine="underline"
                onPress={() => {
                  // Handle forgot password action
                  console.log("Forgot Password Pressed");
                  router.push("/authentication/forgot-password");
                }}
              >
                Forgot Password?
              </Text>
            </YStack>
          </Form>
        </YStack>
      </ScrollView>
      <Card.Background />
    </Card>
  );
}

const styles = StyleSheet.create({
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
  separator: {
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.text.primary,
    textAlign: "center",
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.card.border,
    borderRadius: 5,
    width: "100%",
  },
});
