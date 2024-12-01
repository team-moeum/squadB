import { Tabs } from "expo-router";

import "@/src/common/style/global.css";
import { GluestackUIProvider } from "@moeum/common/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Tabs initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "home" }} />
        <Tabs.Screen name="setting" options={{ title: "setting" }} />
      </Tabs>
    </GluestackUIProvider>
  );
}
