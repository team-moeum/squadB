import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "home" }} />
      <Tabs.Screen name="setting" options={{ title: "setting" }} />
    </Tabs>
  );
}
