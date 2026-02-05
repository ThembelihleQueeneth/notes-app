export interface Note {
    id: string;
    title: string;
    content: string;
    category: 'work' | 'personal' | 'study';
    createdAt: string;
}

export type NoteCategory = Note['category'];
