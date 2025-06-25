/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { Text as DefaultText, View as DefaultView } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from './useColorScheme';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];

export function useThemeColor(
  props: { light?: string; dark?: string },
  group: keyof typeof Colors,
  colorName: string
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    // fallback to color from Colors object
    return (Colors[group] as any)[colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  // Use 'text' group and 'primary' color by default
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text', 'primary');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  // Use 'background' group and 'primary' color by default
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background', 'primary');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
