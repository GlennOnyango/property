import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import {
  Button,
  Card,
  Form,
  Input,
  Label,
  Separator,
  Text,
  XStack,
  YStack,
} from "tamagui"; // or '@tamagui/card'

import Colors from "@/constants/Colors";

export default function LoginCard() {
  const router = useRouter();
  return (
    <Card style={styles.cardStyle}>
      <Card.Header />
      <Card.Footer />
      <YStack gap="$2" alignItems="center">
        <Text style={styles.title}>Access Your Account</Text>
        {/* <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        /> */}

        <Separator alignSelf="stretch" style={styles.separator} />

        <Text style={styles.descriptionText}>
          Welcome to the Login Screen! Please enter your credentials to
          continue.{" "}
          <Text style={{ color: Colors.text.primary }}>
            {" "}
            I don't have an account!{" "}
          </Text>
          <Text
            style={{
              color: Colors.text.primary,
              textDecorationLine: "underline",
            }}
            onPress={() => router.push("/authentication/registration")}
          >
            Sign Up
          </Text>
        </Text>

        <Form style={{ width: "100%" }}>
          <YStack gap="$1" marginBottom="$2">
            <Label htmlFor="name">ID/Phone number</Label>
            <Input
              keyboardType="phone-pad"
              placeholder="Please enter your ID/Phone number"
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
                Sign In
              </Button>
            </Form.Trigger>
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
      <Card.Background />
    </Card>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    padding: 20,
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
