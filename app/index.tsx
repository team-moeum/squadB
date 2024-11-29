import { Link, useNavigation } from "expo-router";
import { Text, View } from "react-native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Link href={{ pathname: "/setting" }}>Go to Setting</Link>
    </View>
  );
}
