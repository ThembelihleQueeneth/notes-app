import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNotes } from '../../context/NotesContext';
import { COLORS, globalStyles } from '../../styles/globalStyles';
import { Note } from '../../types/note';

export default function NotesListScreen() {
    const { notes, deleteNote } = useNotes();
    const router = useRouter();

    const renderItem = ({ item }: { item: Note }) => (
        <View style={globalStyles.card}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginBottom: 4 }}>
                        {item.title}
                    </Text>
                    <Text style={{ fontSize: 14, color: COLORS.text, marginBottom: 8 }} numberOfLines={2}>
                        {item.content}
                    </Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.badge, { backgroundColor: getCategoryColor(item.category) }]}>
                            <Text style={styles.badgeText}>{item.category}</Text>
                        </View>
                        <Text style={{ fontSize: 12, color: COLORS.textLight, marginLeft: 10 }}>
                            {new Date(item.createdAt).toLocaleDateString()}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => deleteNote(item.id)} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Feather name="trash-2" size={20} color={COLORS.error} />
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <View style={[globalStyles.container, { paddingTop: 10 }]}>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={{ paddingBottom: 100 }}
                ListEmptyComponent={
                    <View style={{ alignItems: 'center', marginTop: 100 }}>
                        <Feather name="file-text" size={64} color={COLORS.border} />
                        <Text style={{ marginTop: 20, color: COLORS.textLight, fontSize: 16 }}>No notes yet</Text>
                    </View>
                }
            />
            <TouchableOpacity
                style={styles.fab}
                onPress={() => router.push('/notes/add')}>
                <Feather name="plus" size={32} color={COLORS.white} />
            </TouchableOpacity>
        </View>
    );
}

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'work': return '#E3F2FD'; // Light Blue
        case 'personal': return '#F3E5F5'; // Light Purple
        case 'study': return '#E8F5E9'; // Light Green
        default: return '#F5F5F5';
    }
};

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        bottom: 30,
        right: 30,
        backgroundColor: COLORS.primary,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
    },
    badge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 6,
    },
    badgeText: {
        fontSize: 12,
        fontWeight: '600',
        color: COLORS.text,
        textTransform: 'capitalize',
    },
});
