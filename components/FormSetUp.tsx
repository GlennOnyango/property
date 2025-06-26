import Colors from "@/constants/Colors";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { ScrollView } from "tamagui";

type Props = {
  children?: React.ReactNode;
};

export default function FormSetUp({ children }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: Colors.background.primary }}
    >
      <ScrollView style={{ flex: 1, backgroundColor: Colors.background.primary }} contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          {children}
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
