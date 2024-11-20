import { Stack } from 'expo-router';

export default function Layout() {
    return(
        <Stack
            screenOptions={{
                headerTitleStyle: { 
                    fontWeight: 'bold', // Deixa negrito
                    fontSize: 24,  
                },
                headerTitleAlign: 'center',
                fontWeight: 'bold',
            }}
        >
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="registrar" options={{ title: "Cadastro"}} />
        </Stack>
    )
}