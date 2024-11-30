import { Button } from "react-native";
import { Text, View } from "react-native";
// import { create } from "zustand";

// const useStore = create(set => ({
//   bears: 0,
//   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears: any) => set({ bears: newBears })
// }));

// function BearCounter() {
//   const bears = useStore((state: any) => state.bears);
//   return <Text>{bears} around here...</Text>;
// }

export default function HomeScreen() {
  // const increasePopulation = useStore((state: any) => state.increasePopulation);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Zustand</Text>
      {/* <Button title="버튼" onPress={increasePopulation} /> */}
      {/* <BearCounter /> */}
    </View>
  );
}
