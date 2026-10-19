import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomRoutes } from "./BottomRoutes";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";

const Drawer = createDrawerNavigator();

export function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="tabs"
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
      {/* O Drawer chama o BottomRoutes (Abas) como o componente principal de início */}
      <Drawer.Screen
        name="tabs"
        component={BottomRoutes}
        options={{
          drawerLabel: "Início",
          title: "Início",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        component={Profile}
        options={{
          drawerLabel: "Perfil",
          title: "Perfil",
          drawerIcon: ({ color, size, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{
          drawerLabel: "Configurações",
          title: "Configurações",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}