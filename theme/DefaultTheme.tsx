import { Theme } from "@react-navigation/native";
import { fonts } from "../node_modules/@react-navigation/native/src/theming/fonts";

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: "rgb(0, 122, 255)",
    background: "rgb(255, 59, 48)",
    card: "rgb(255, 255, 255)",
    text: "rgb(255, 59, 48)",
    border: "rgb(216, 216, 216)",
    notification: "rgb(255, 59, 48)",
  },
  fonts,
};
