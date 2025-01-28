import { Stack, Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import "@/src/common/style/global.css";
import { GluestackUIProvider } from "@moeum/common/components/ui/gluestack-ui-provider";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false
            }}
          />
        </Stack>
      </SafeAreaView>
    </GluestackUIProvider>
  );
}
