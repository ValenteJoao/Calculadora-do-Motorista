import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import { Home } from '../screens/Inicio';
import { Finance } from '../screens/Faturamento';
import { Transactions } from '../screens/EntradaseSaidas'
import { Profile } from '../screens/Perfil'
import { AddTransactions } from '../screens/AddTransactions'

import { Ionicons } from '@expo/vector-icons'
import { ButtonAdd } from '../components/Buttons/ButtonAdd';

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          height: 80
        }
      }}>

      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='home' size={40} color={'#1D7AA7'} />
            }

            return <Ionicons name='home-outline' size={35} color={'#1D7AA7'} />
          }
        }}
      />

      <Tab.Screen
        name="Finance"
        component={Finance}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='cash' size={40} color={'#1D7AA7'} />
            }

            return <Ionicons name='cash-outline' size={35} color={'#1D7AA7'} />
          }
        }}
      />

      <Tab.Screen
        name="AddTransactions"
        component={AddTransactions}
        options={{
          tabBarIcon: ({ color, size, }) => {
            return <ButtonAdd size={size} color={color} />
          }
        }}

      />

      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='grid' size={40} color={'#1D7AA7'} />
            }

            return <Ionicons name='grid-outline' size={35} color={'#1D7AA7'} />
          }
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name='person-circle' size={50} color={'#1D7AA7'} />
            }

            return <Ionicons name='person-circle-outline' size={45} color={'#1D7AA7'} />
          }
        }}
      />

    </Tab.Navigator>
  );
}