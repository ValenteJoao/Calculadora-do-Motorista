import { NavigationContainer } from "@react-navigation/native";

import { AuthStack } from './authStack';
import { TabRoutes } from './tabRoutes';

export function Routes() {
  return (
    <NavigationContainer >
      <AuthStack />
    </NavigationContainer>
  )
};