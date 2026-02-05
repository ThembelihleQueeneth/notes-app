import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNotes } from '../../context/NotesContext';
import { COLORS, globalStyles } from '../../styles/globalStyles';
import { NoteCategory } from '../../types/note';

export default function AddNoteScreen() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState<NoteCategory>('personal');
    const { addNote } = useNotes();
    const router = useRouter();

    const handleSave = () => {
        if (!title.trim()) return;
        addNote({ title, content, category });
        router.back();
    };

    return (
        <View style={globalStyles.container}>
            <TextInput
                placeholder="Title"
                style={[globalStyles.input, { fontSize: 20, fontWeight: 'bold' }]}
                value={title}
                onChangeText={setTitle}
            />

            <View style={{ flexDirection: 'row', marginBottom: 20, gap: 10 }}>
                {(['personal', 'work', 'study'] as NoteCategory[]).map((cat) => (
                    <TouchableOpacity
                        key={cat}
                        onPress={() => setCategory(cat)}
                        style={{
                            paddingHorizontal: 16,
                            paddingVertical: 8,
                            borderRadius: 20,
                            backgroundColor: category === cat ? COLORS.primary : COLORS.white,
                            borderWidth: 1,
                            borderColor: category === cat ? COLORS.primary : COLORS.border,
                        }}>
                        <Text style={{
                            color: category === cat ? COLORS.white : COLORS.text,
                            textTransform: 'capitalize',
                            fontWeight: '600',
                        }}>
                            {cat}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                placeholder="Start typing..."
                style={[globalStyles.input, { flex: 1, textAlignVertical: 'top' }]}
                multiline
                value={content}
                onChangeText={setContent}
            />

            <TouchableOpacity style={[globalStyles.button, { marginBottom: 20 }]} onPress={handleSave}>
                <Text style={globalStyles.buttonText}>Save Note</Text>
            </TouchableOpacity>
        </View>
    );
}
