import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, SafeAreaView } from "react-native";
import { Agenda } from "react-native-calendars";
import { setupLocale } from "@moeum/common/constants/localeConfig";
import { mockData } from "@moeum/common/constants/mock";

setupLocale();

export default function HomeScreen() {
  const [items, setItems] = useState<{ [key: string]: any[] }>({});
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [key, setKey] = useState(0);
  const today = new Date();

  const loadItems = () => {
    const formattedItems: { [key: string]: any[] } = {};

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 30);
    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 30);

    for (
      let current = new Date(startDate);
      current <= endDate;
      current.setDate(current.getDate() + 1)
    ) {
      const dateString = current.toISOString().split("T")[0];
      if (!formattedItems[dateString]) {
        formattedItems[dateString] = [];
      }
    }

    mockData.forEach(event => {
      if (!formattedItems[event.dateString]) {
        formattedItems[event.dateString] = [];
      }
      formattedItems[event.dateString].push({
        id: event.id,
        category: event.category,
        content: event.content
      });
    });

    setItems(formattedItems);
  };

  useEffect(() => {
    loadItems();

    requestAnimationFrame(() => {
      setKey(prevKey => prevKey + 1);
    });
  }, []);

  const renderItem = (item: any) => (
    <View style={styles.itemContainer}>
      <Text style={styles.categoryText}>
        {item.category === "경제지표" ? "📊 " : item.category === "휴장" ? "🏖 " : "📅 "}
        {item.category}
      </Text>
      <Text style={styles.contentText}>{item.content}</Text>
    </View>
  );

  const renderEmptyDate = () => (
    <View style={styles.emptyDateContainer}>
      <Text style={styles.emptyDateText}>🏝️ 이벤트가 없습니다!</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.agendaContainer}>
        <Agenda
          key={key}
          items={items}
          selected={selectedDate}
          renderItem={renderItem}
          renderEmptyDate={renderEmptyDate}
          pastScrollRange={2}
          futureScrollRange={2}
          onDayPress={day => setSelectedDate(day.dateString)}
          theme={{
            agendaDayTextColor: "black",
            agendaDayNumColor: "black",
            agendaTodayColor: "#ff6347",
            agendaKnobColor: "#2e86de",
            todayTextColor: "#ff6347",
            dotColor: "#2e86de",
            selectedDayBackgroundColor: "#2e86de",
            selectedDayTextColor: "#ffffff",
            textDayFontSize: 18,
            textMonthFontSize: 18,
            textDayHeaderFontSize: 14
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  agendaContainer: {
    flex: 1,
    backgroundColor: "#fff"
  },
  itemContainer: {
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  contentText: {
    fontSize: 14,
    color: "#555"
  },
  emptyDateContainer: {
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    height: 80
  },
  emptyDateText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#999"
  }
});
