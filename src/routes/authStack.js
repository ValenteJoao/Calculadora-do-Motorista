import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { Screenlogin } from '../screens/Login';
import { ScreenRegister } from '../screens/Register';
import { ScreenTerms } from '../screens/Terms';
import { TabRoutes } from './tabRoutes';

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        headerShown: false
      }}
        name="Login"
        component={Screenlogin}
      />
      <Stack.Screen
        name="Register"
        component={ScreenRegister}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Terms"
        component={ScreenTerms}
        options={{
          headerShown: true,
          title: 'Termos e Condições'
        }}
      />

      <Stack.Screen
        name="Home"
        component={TabRoutes}
        options={{
          headerShown: false,
          title: 'Home'
        }}

      />


    </Stack.Navigator>
  );
}