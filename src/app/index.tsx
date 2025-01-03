import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Agenda } from "react-native-calendars";
import agendaTheme from "@moeum/features/calendar/constants/agendaTheme";

import { setupLocale } from "@moeum/features/calendar/constants/localeConfig";
import { loadItems } from "@moeum/features/calendar/utils/loadItems";
import { RenderEmptyDate } from "@moeum/features/calendar/components/RenderEmptyDate";
import { RenderItem } from "@moeum/features/calendar/components/RenderItem";

setupLocale();

export default function HomeScreen() {
  const [items, setItems] = useState<{ [key: string]: any[] }>({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const today = new Date();

  useEffect(() => {
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 30);

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 30);

    setItems(loadItems(startDate, endDate));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Agenda
        items={items}
        selected={selectedDate}
        renderItem={item => {
          if (!item) {
            console.warn("item이 null이거나 undefined입니다.");
            return null;
          }
          return <RenderItem item={item} />;
        }}
        renderEmptyDate={() => <RenderEmptyDate />}
        pastScrollRange={2}
        futureScrollRange={2}
        onDayPress={day => setSelectedDate(day.dateString)}
        theme={agendaTheme}
      />
    </View>
  );
}
