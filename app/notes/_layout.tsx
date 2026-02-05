import { Stack } from 'expo-router';
import { COLORS } from '../../src/styles/globalStyles';

export default function NotesLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.background,
                },
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerShadowVisible: false,
            }}>
            <Stack.Screen name="index" options={{ title: 'My Notes' }} />
            <Stack.Screen name="add" options={{ title: 'New Note', presentation: 'modal' }} />
        </Stack>
    );
}
