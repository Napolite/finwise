import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: "#00D09E" }}
        className="bg-[#1a1a1a]"
      />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#00D09E",
          },
        }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="search-calendar" />
      </Stack>
    </>
  );
}
