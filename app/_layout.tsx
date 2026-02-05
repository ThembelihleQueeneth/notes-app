import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from '../src/context/AuthContext';
import { NotesProvider } from '../src/context/NotesContext';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NotesProvider>
          <Slot />
          <StatusBar style="dark" />
        </NotesProvider>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
