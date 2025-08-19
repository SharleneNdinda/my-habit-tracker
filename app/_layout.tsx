import { Stack } from "expo-router";

// Define shared UI elements here
export default function RootLayout() {
  return (
    // Represents whichever screen you are in
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
    </Stack>
  );
}
