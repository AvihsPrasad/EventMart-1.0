import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="otp" options={{ headerShown: false }} />
        <Stack.Screen name="splashScreen" options={{ headerShown: false }} />
        {/* <Stack.Screen name="forget-password" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
  );
}
