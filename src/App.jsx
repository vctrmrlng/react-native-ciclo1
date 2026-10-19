// GestureHandlerRootView é EXIGIDO pelo react-native-gesture-handler, que é a
// biblioteca que o Drawer usa para reconhecer o gesto de arrastar o dedo.
// Ele precisa envolver TODO o app e ocupar a tela inteira (flex: 1).
// Sem ele, a gaveta não abre pelo gesto (principalmente no Android).
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./routes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Product from "../screens/Product";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Routes />
        </GestureHandlerRootView>
    );

        <Drawer.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: true,
            headerTintColor: "#111827",
            headerStyle: { backgroundColor: "#FFFFFF" },
            drawerPosition: "left",
            drawerType: "front",
            drawerActiveTintColor: "#7C3AED",
            drawerActiveBackgroundColor: "#EDE9FE",
            drawerInactiveTintColor: "#6B7280",
            drawerLabelStyle: { fontSize: 15, fontWeight: "600" },
            drawerStyle: { backgroundColor: "#FFFFFF", width: 260 },
          }}
        >

            <Drawer.Screen
            name="home"
            component={Home}
            options={{
                drawerLabel: "Início",
                title: "Início",
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="home" size={size} color={color} />
                ),
            }}
            />
