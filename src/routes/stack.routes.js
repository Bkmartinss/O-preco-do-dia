import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    categoria,
    editar,
    home,
    local,
    login,
    perfil,
    produtos,
    registrar,
} from '../screens';

const Stack = createNativeStackNavigator()

export function HomeNav(){
    return(
        <Stack.Navigator 
        screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Home' component={home}/>
        </Stack.Navigator>
    )
}
export function ProdutosNav(){
    return(
        <Stack.Navigator screenOptions={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name='Adicionar Produto' component={produtos}/>
        </Stack.Navigator>
    )
}
export function LocalNav(){
    return(
        <Stack.Navigator screenOptions={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name='Adcionar Local' component={local}/>
        </Stack.Navigator>
    )
}
export function CategoriaNav(){
    return(
        <Stack.Navigator screenOptions={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name='Adicionar Categoria' component={categoria}/>
        </Stack.Navigator>
    )
}
export function PerfilNav(){
    return(
        <Stack.Navigator screenOptions={{ 
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
            }
        }}>
            <Stack.Screen name='Perfil' component={perfil}/>
        </Stack.Navigator>
    )
}