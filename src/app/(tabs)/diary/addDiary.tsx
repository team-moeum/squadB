import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import { agendaItems } from "@/src/features/diary/constants/mock";

const AddDiaryScreen = () => {
  const [newDiary, setNewDiary] = useState({
    date: "",
    title: "",
    content: "",
    image: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setNewDiary({ ...newDiary, [field]: value });
  };

  const handleAddDiary = () => {
    if (!newDiary.date || !newDiary.title || !newDiary.content) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const newDiaryData = {
      key: String(agendaItems.length + 1),
      date: newDiary.date,
      title: newDiary.title,
      content: newDiary.content,
      image: newDiary.image
    };

    agendaItems.push(newDiaryData);
    alert("매매일지가 추가되었습니다.");
  };

  return (
    <View style={styles.container}>
      <Text>매매일지 추가</Text>
      <TextInput
        style={styles.input}
        placeholder="날짜 (yyyy-mm-dd)"
        value={newDiary.date}
        onChangeText={text => handleInputChange("date", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="제목"
        value={newDiary.title}
        onChangeText={text => handleInputChange("title", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="내용"
        value={newDiary.content}
        onChangeText={text => handleInputChange("content", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="이미지 URL"
        value={newDiary.image}
        onChangeText={text => handleInputChange("image", text)}
      />
      <Button title="매매일지 추가" onPress={handleAddDiary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff"
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10
  }
});

export default AddDiaryScreen;
