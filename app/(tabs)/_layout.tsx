import { Tabs } from "expo-router";

// Define shared UI elements here
export default function TabsLayout() {
  return (
    // Represents whichever screen you are in
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="login" options={{ title: "Login" }} />
    </Tabs>
  );
}
