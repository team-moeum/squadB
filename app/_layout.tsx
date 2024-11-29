import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          title: "home",
        }}
      />
      <Stack.Screen
        name="setting"
        options={{
          title: "setting",
        }}
      />
    </Stack>
  );
}
