import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuthStore } from '@/core/store/authStore';
import { useAcademicStore } from '@/academic/store/academicStore';
import { LoginScreen } from '@/ui/screens/auth/LoginScreen';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

// Temporary Home Screen for validation
const HomeScreen = () => {
  const { user, signOut } = useAuthStore();
  const { syncData, syncStatus, academicLoad } = useAcademicStore();

  useEffect(() => {
    if (user?.id) {
      syncData(user.id);
    }
  }, [user]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 flex-1">
        <Text className="text-xl font-bold mb-4">Bienvenido, {user?.name}</Text>
        <Text className="text-gray-600 mb-8">Estado de Sincronización: {syncStatus}</Text>

        <Text className="font-bold text-lg mb-2">Carga Académica ({academicLoad.length})</Text>
        {syncStatus === 'syncing' ? (
          <ActivityIndicator className="mt-4" />
        ) : (
          <View className="mb-8">
            {academicLoad.length === 0 ? <Text>No se encontraron materias.</Text> : null}
            {academicLoad.map((p) => (
              <View key={p.id} className="p-3 bg-gray-50 mb-2 rounded border border-gray-200">
                <Text className="font-medium">{p.asignatura?.name || `Asignatura ${p.asignatura_id}`}</Text>
              </View>
            ))}
          </View>
        )}

        <TouchableOpacity
          onPress={signOut}
          className="mt-auto bg-red-100 p-4 rounded-xl border border-red-200"
        >
          <Text className="text-red-600 text-center font-bold">Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  const { status, loadSession } = useAuthStore();

  useEffect(() => {
    loadSession();
  }, []);

  if (status === 'loading' && !useAuthStore.getState().user) {
    // Initial load splash
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {status === 'authenticated' ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
