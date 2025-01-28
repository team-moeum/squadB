import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Agenda, AgendaEntry } from "react-native-calendars";
import agendaTheme from "@moeum/features/calendar/constants/agendaTheme";

import { setupLocale } from "@moeum/features/calendar/constants/localeConfig";
import { loadItems } from "@moeum/features/calendar/utils/loadItems";
import { RenderEmptyDate } from "@moeum/features/calendar/components/RenderEmptyDate";
import { RenderItem } from "@moeum/features/calendar/components/RenderItem";
import { EconomicEventsApi } from "@moeum/shared/apis";

setupLocale();

export default function HomeScreen() {
  const [items, setItems] = useState<{ [key: string]: AgendaEntry[] }>({});
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const today = new Date();

  useEffect(() => {
    const economicEventsApi = new EconomicEventsApi();

    async function getEconomicEvents() {
      try {
        const response = await economicEventsApi.economicEventControllerFindAll({
          endDate: "2025-01-31",
          startDate: "2025-01-01",
          country: "KR"
        });

        const events = response.data || [];
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);

        const endDate = new Date(today);
        endDate.setDate(today.getDate() + 30);

        const formattedItems = loadItems(startDate, endDate, events);
        setItems(formattedItems);
      } catch (error) {
        console.error("Error fetching economic events:", error);
      }
    }

    getEconomicEvents();
  }, []);

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
