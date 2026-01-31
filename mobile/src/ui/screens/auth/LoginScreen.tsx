import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useAuthStore } from '@/core/store/authStore';

export const LoginScreen = () => {
    const [ci, setCi] = useState('');
    const [password, setPassword] = useState('');
    const { signIn, status, error } = useAuthStore();

    const handleLogin = async () => {
        if (!ci || !password) {
            Alert.alert('Error', 'Por favor ingrese CI y contraseña');
            return;
        }
        await signIn({ ci, password });
    };

    return (
        <View className="flex-1 justify-center items-center bg-gray-100 p-4">
            <View className="w-full max-w-sm bg-white p-6 rounded-2xl shadow-lg">
                <Text className="text-2xl font-bold text-center text-gray-800 mb-6">
                    Aprende - Acceso Escolar
                </Text>

                <Text className="text-sm font-medium text-gray-600 mb-1">Cédula de Identidad</Text>
                <TextInput
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 text-gray-800"
                    placeholder="Ej: 12345678"
                    value={ci}
                    onChangeText={setCi}
                    keyboardType="numeric"
                    autoCapitalize="none"
                />

                <Text className="text-sm font-medium text-gray-600 mb-1">Contraseña</Text>
                <TextInput
                    className="w-full border border-gray-300 rounded-lg p-3 mb-6 text-gray-800"
                    placeholder="••••••••"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                {error && (
                    <Text className="text-red-500 text-sm text-center mb-4">{error}</Text>
                )}

                <TouchableOpacity
                    className={`w-full p-4 rounded-xl ${status === 'loading' ? 'bg-blue-400' : 'bg-blue-600'}`}
                    onPress={handleLogin}
                    disabled={status === 'loading'}
                >
                    {status === 'loading' ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text className="text-white text-center font-bold text-lg">Entrar</Text>
                    )}
                </TouchableOpacity>

                <Text className="text-xs text-center text-gray-400 mt-6">
                    Fase 1.3 - Validación Técnica
                </Text>
            </View>
        </View>
    );
};
