import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';


import {
    AuthNav,
    HomeNav,
    ProdutosNav,
    LocalNav,
    CategoriaNav,
    PerfilNav
} from './stack.routes'

const Tab = createBottomTabNavigator();

export default function ShowRoutes(){
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false, // Remove o cabeçalho padrão
            tabBarShowLabel: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconSize = 40;
                let iconName;
                //ícones para cada rota
                if (route.name === 'HomeTab') {
                    iconName = 'home';
                } else if (route.name === 'ProdutosTab') {
                    iconName = 'shopping-cart';
                } else if (route.name === 'CategoriaTab') {
                    iconName = 'category';
                } else if (route.name === 'LocalTab') {
                    iconName = 'place';
                } else if (route.name === 'PerfilTab') {
                    iconName = 'person';
                }

                //ícone com as configurações
                return (
                    <Icon
                        name={iconName}
                        size={iconSize}
                        color={focused ? 'green' : '#57bf9e'} // Cor dinâmica (ativo/inativo)
                    />
                );
            },
            tabBarActiveTintColor: 'green', // Cor do ícone ativo
            tabBarInactiveTintColor: 'gray', // Cor do ícone inativo
            tabBarStyle: { height: 70, paddingTop:10, paddingBottom: 10, justifyContent: 'center',}, // Estilo da barra
        })}>
            <Tab.Screen
                name="HomeTab"
                component={AuthNav}
            />
            <Tab.Screen
                name="ProdutosTab"
                component={ProdutosNav}
            />
            <Tab.Screen
                name="CategoriaTab"
                component={CategoriaNav}
            />
            <Tab.Screen
                name="LocalTab"
                component={LocalNav}
            />
            <Tab.Screen
                name="PerfilTab"
                component={PerfilNav}
            />
        </Tab.Navigator>
    )
}
