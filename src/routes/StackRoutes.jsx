// Arquivo responsável por registrar e configurar as rotas do App.
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Product from "../screens/Product";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="home"
              component={Home}
              // options={{ headerShown: true }}
            />
            <Stack.Screen
              name="product"
              component={Product}
              options={{ headerTitle: "Produtos" }}
            />
        </Stack.Navigator>
 );
}
