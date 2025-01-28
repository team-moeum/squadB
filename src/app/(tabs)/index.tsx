import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Agenda, AgendaEntry } from "react-native-calendars";

import agendaTheme from "@moeum/features/calendar/constants/agendaTheme";
import { setupLocale } from "@moeum/features/calendar/constants/localeConfig";
import { fetchEconomicEvents } from "@moeum/features/calendar/utils/fetchEconomicEvents";

import { RenderEmptyDate } from "@moeum/features/calendar/components/RenderEmptyDate";
import { RenderItem } from "@moeum/features/calendar/components/RenderItem";

setupLocale();

export default function HomeScreen() {
  const [items, setItems] = useState<{ [key: string]: AgendaEntry[] }>({});
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);

  useEffect(() => {
    async function fetchData() {
      const updatedItems = await fetchEconomicEvents(selectedDate, items);
      setItems(updatedItems);
    }

    fetchData();
  }, [selectedDate]);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Agenda
        items={items}
        selected={selectedDate}
        renderItem={(item: AgendaEntry) => {
          if (!item) {
            console.warn("item이 null이거나 undefined입니다.");
            return null;
          }
          return <RenderItem item={item} />;
        }}
        renderEmptyDate={() => <RenderEmptyDate />}
        pastScrollRange={2}
        futureScrollRange={2}
        onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
        theme={agendaTheme}
      />
    </View>
  );
}
