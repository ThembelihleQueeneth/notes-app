import { createContext, ReactNode, useContext, useState } from 'react';
import { Note } from '../types/note';

interface NotesContextType {
    notes: Note[];
    addNote: (note: Omit<Note, 'id' | 'createdAt'>) => void;
    deleteNote: (id: string) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export function NotesProvider({ children }: { children: ReactNode }) {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: '1',
            title: 'Welcome to Notes!',
            content: 'This is your first note. You can add more!',
            category: 'personal',
            createdAt: new Date().toISOString(),
        },
    ]);

    const addNote = (newNoteData: Omit<Note, 'id' | 'createdAt'>) => {
        const newNote: Note = {
            ...newNoteData,
            id: Math.random().toString(36).substring(7),
            createdAt: new Date().toISOString(),
        };
        setNotes((prev) => [newNote, ...prev]);
    };

    const deleteNote = (id: string) => {
        setNotes((prev) => prev.filter((note) => note.id !== id));
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
}

export function useNotes() {
    const context = useContext(NotesContext);
    if (context === undefined) {
        throw new Error('useNotes must be used within a NotesProvider');
    }
    return context;
}
