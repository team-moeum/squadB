import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "캘린더"
        }}
      />
      <Tabs.Screen
        name="diary"
        options={{
          headerShown: false,
          title: "일기"
        }}
      />
    </Tabs>
  );
}
