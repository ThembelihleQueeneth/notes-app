import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { COLORS, globalStyles } from '../../styles/globalStyles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (email && password) {
      login(email);
      router.replace('/notes');
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={globalStyles.title}>Welcome Back!</Text>
        <Text style={globalStyles.subtitle}>Sign in to continue</Text>

        <View style={{ marginTop: 40 }}>
          <TextInput
            placeholder="Email Address"
            style={globalStyles.input}
            placeholderTextColor={COLORS.textLight}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            style={globalStyles.input}
            placeholderTextColor={COLORS.textLight}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity style={[globalStyles.button, { marginTop: 20 }]} onPress={handleLogin}>
            <Text style={globalStyles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
