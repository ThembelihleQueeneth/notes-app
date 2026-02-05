import { StyleSheet } from 'react-native';

export const COLORS = {
    primary: '#6b4fbb', // Deep Purple
    secondary: '#9575cd',
    background: '#f8f9fa',
    card: '#ffffff',
    text: '#333333',
    textLight: '#757575',
    border: '#e0e0e0',
    error: '#d32f2f',
    success: '#388e3c',
    white: '#ffffff',
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: COLORS.primary,
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 10,
    },
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    input: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 10,
        padding: 15,
        fontSize: 16,
        marginBottom: 15,
        color: COLORS.text,
    },
    button: {
        backgroundColor: COLORS.primary,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.primary,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 4,
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '600',
    },
});
