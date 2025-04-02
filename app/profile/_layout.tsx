import { Stack } from 'expo-router';

export default function ProfileLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerShown: false 
        }} 
      />
      <Stack.Screen 
        name="settings/account" 
        options={{ 
          title: 'Account Settings',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          },
        }} 
      />
      <Stack.Screen 
        name="settings/notifications" 
        options={{ 
          title: 'Notifications',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          },
        }} 
      />
      <Stack.Screen 
        name="settings/privacy" 
        options={{ 
          title: 'Privacy & Security',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          },
        }} 
      />
      <Stack.Screen 
        name="settings/help" 
        options={{ 
          title: 'Help & Support',
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: '600',
          },
        }} 
      />
    </Stack>
  );
}