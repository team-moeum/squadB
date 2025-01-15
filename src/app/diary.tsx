import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { Link } from "expo-router";
import { agendaItems } from "@/src/features/diary/constants/mock";

const getWeekDates = (date: string) => {
  const startDate = new Date(date);
  const dayOfWeek = startDate.getDay();
  const startOfWeek = new Date(startDate);
  startOfWeek.setDate(startDate.getDate() - dayOfWeek);

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const currentDay = new Date(startOfWeek);
    currentDay.setDate(startOfWeek.getDate() + i);
    weekDates.push(currentDay.toISOString().split("T")[0]);
  }

  return weekDates;
};

const ExpandableCalendarScreen: React.FC = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState<string>(today);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [weekDates, setWeekDates] = useState<string[]>(getWeekDates(today));

  const changeWeek = (direction: "previous" | "next") => {
    const currentStartDate = new Date(weekDates[0]);
    currentStartDate.setDate(currentStartDate.getDate() + (direction === "previous" ? -7 : 7));
    const newWeekDates = getWeekDates(currentStartDate.toISOString().split("T")[0]);
    setWeekDates(newWeekDates);
    setSelectedDate(newWeekDates[0]);
    filterDataByDate(newWeekDates[0]);
  };

  const handleDayPress = (clickedDate: string) => {
    setSelectedDate(clickedDate);
    filterDataByDate(clickedDate);
  };

  const filterDataByDate = (date: string) => {
    const dataForSelectedDate = agendaItems.filter(item => item.date === date);
    setFilteredData(dataForSelectedDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.weekNavigation}>
        <TouchableOpacity onPress={() => changeWeek("previous")} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>

        <Text style={styles.selectedWeekText}>
          {weekDates[0]} ~ {weekDates[6]}
        </Text>

        <TouchableOpacity onPress={() => changeWeek("next")} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.calendar}>
        {weekDates.map(date => (
          <TouchableOpacity
            key={date}
            onPress={() => handleDayPress(date)}
            style={[styles.dayButton, date === selectedDate && styles.selectedButton]}
          >
            <Text>{new Date(date).toLocaleDateString("ko-KR", { weekday: "short" })}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.list}>
        <Text style={styles.selectedDateText}>{selectedDate}</Text>
        {filteredData.length === 0 ? (
          <Text>이 날짜에는 매매일지가 없습니다.</Text>
        ) : (
          filteredData.map(item => (
            <View key={item.key} style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemContent}>{item.content}</Text>
              {item.image && <Image source={{ uri: item.image }} style={styles.itemImage} />}
            </View>
          ))
        )}
      </View>

      <Link href="/addDiary" style={styles.addButton}>
        <Text style={styles.addButtonText}>매매일지 추가</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  weekNavigation: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20
  },
  arrowButton: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5
  },
  arrowText: {
    fontSize: 18,
    color: "#000"
  },
  selectedWeekText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20
  },
  dayButton: {
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5
  },
  selectedButton: {
    backgroundColor: "#007BFF"
  },
  list: {
    paddingTop: 20
  },
  selectedDateText: {
    fontSize: 18,
    marginBottom: 10
  },
  item: {
    marginBottom: 15
  },
  itemTitle: {
    fontWeight: "bold"
  },
  itemContent: {
    color: "grey"
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginTop: 10
  },
  addButton: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginTop: 20
  },
  addButtonText: {
    color: "#fff",
    textAlign: "center"
  }
});

export default ExpandableCalendarScreen;
