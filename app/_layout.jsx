import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font"
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  let [fontsLoaded, error] = useFonts({
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    "Strike-Regular": require("../assets/fonts/Strike-Regular.ttf"),
  })

  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Home" options={{ headerShown: false, animation: "slide_from_right" }} />
      <Stack.Screen name="Exercises" options={{ headerShown: false, animation: "slide_from_bottom" }} />
      <Stack.Screen name="ExerciseDetails" options={{ headerShown: false, animation: "slide_from_bottom" }} />
    </Stack>
  );
}
