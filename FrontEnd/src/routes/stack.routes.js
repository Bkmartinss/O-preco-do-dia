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
    cadastro,
} from '../screens';
import ShowRoutes from "./tab.routes";

const Stack = createNativeStackNavigator() //pilha  

export default props => (
    <Stack.Navigator 
        initialRouteName="Login" //tela inicial
        screenOptions={{ //aplicado a todas as telas
            headerShown: false,
            headerLeft: () => null,
            headerTitleAlign: 'center',
            headerTitleStyle: {
                fontSize: 25,
                fontWeight: 'bold',
        }}}
            >
            <Stack.Screen name="Login" component={login}/>
            <Stack.Screen name="Cadastro" component={cadastro} options={{headerShown: true}}/>
            <Stack.Screen name="Home" component={ShowRoutes} />
            <Stack.Screen name="Perfil" component={perfil} />
            <Stack.Screen name="Editar" component={editar} options={{headerShown: true}}/>
    </Stack.Navigator>
)

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
            <Stack.Screen name='Local' component={local}/>
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
