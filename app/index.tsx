import { Redirect } from 'expo-router';
import { useAuth } from '../src/context/AuthContext';

export default function Index() {
    const { isAuthenticated } = useAuth();

    // In a real app we might check for persistence loading here

    return <Redirect href={isAuthenticated ? "/notes" : "/auth/login"} />;
}
