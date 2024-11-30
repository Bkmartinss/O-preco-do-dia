import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


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
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                // options={tabBarI}
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
