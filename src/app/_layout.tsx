import { Tabs } from "expo-router";

import "@/src/common/style/global.css";
import { GluestackUIProvider } from "@moeum/common/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Tabs initialRouteName="index" screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "캘린더" }} />
        <Tabs.Screen name="diary" options={{ title: "다이어리" }} />
      </Tabs>
    </GluestackUIProvider>
  );
}
