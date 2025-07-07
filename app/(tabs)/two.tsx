import Colors from "@/constants/Colors";
import * as React from "react";
import { Text, View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }}>
    <Text>Tab 1</Text>
  </View>
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>Tab 2</Text>
  </View>
);

const VaccantRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }}>
    <Text>Tab 2</Text>
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  vaccants: VaccantRoute,
});

const routes = [
  { key: "first", title: "My Apartments" },
  { key: "second", title: "Invitations" },
  { key: "vaccants", title: "Vaccants" },
];

export default function TabViewExample() {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: "#4F46E5" }}
          style={{ backgroundColor: Colors.background.primary }}
          inactiveColor="#9CA3AF"
          activeColor="#4F46E5"
        />
      )}
    />
  );
}
