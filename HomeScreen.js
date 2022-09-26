import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <Stack.Navigator alignItems="center">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
  
    </Stack.Navigator>
  );
}

export default HomeScreen;