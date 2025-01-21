import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="addDiary" options={{ headerShown: false }} />
    </Stack>
  );
};

export default StackLayout;
