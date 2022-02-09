import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TodoScreen } from "../screens/TodoScreen";
import { TaskScreen } from "../screens/TaskScreen";
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator();

export const TodoNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.TODO}
        component={TodoScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={ROUTES.TASK}
        component={TaskScreen}
      />
    </Stack.Navigator>
  );
};
