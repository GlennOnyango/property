import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import {
  Button,
  Card,
  Form,
  Input,
  Label, Separator,
  Text,
  XStack,
  YStack
} from "tamagui"; // or '@tamagui/card'

import Colors from "@/constants/Colors";

export default function ForgotPasswordCard() {
  const router = useRouter();
  return (
    <Card style={styles.cardStyle}>
      <Card.Header />
      <Card.Footer />

      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
      <YStack gap="$2" alignItems="center" justifyContent="flex-start">
        <Text style={styles.title}>Confirm Your Email</Text>

        <Separator alignSelf="stretch" style={styles.separator} />

        <Text style={styles.descriptionText}>
          Please enter your email address to receive a password reset code.
          <Text style={{ color: Colors.text.primary }}>
            {" "}
            Remembered your password?{" "}
          </Text>
          <Text
            style={{
              color: Colors.text.primary,
              textDecorationLine: "underline",
            }}
            onPress={() => router.push("/authentication/login")}
          >
            Sign In
          </Text>
        </Text>

        <Form style={{ width: "100%", paddingHorizontal: 10 }}>
          <YStack gap="$1" marginBottom="$2">
            <Label htmlFor="name">Email Address</Label>
            <Input
              keyboardType="email-address"
              placeholder="Please enter your email address"
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
                onPress={() => {
                  // Handle send reset code action
                  console.log("Send Reset Code Pressed");
                  // Here you would typically call an API to send the reset code
                  router.push("/authentication/reset-password");
                }}
              >
                Send Reset Code
              </Button>
            </Form.Trigger>
          </XStack>
        </Form>
      </YStack>
      {/* </ScrollView> */}
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
