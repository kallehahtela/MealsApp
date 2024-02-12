import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetailScreen';
import FavouriteScreen from './screens/FavouriteScreen';
import FavoritesContextProvider from './store/context/favorite-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
     headerStyle: { backgroundColor: '#b38b74' },
     headerTintColor: '#fff',
     sceneContainerStyle: { backgroundColor: '#ececec' },
     drawerContentStyle: { backgroundColor: '#b38b74'},
     drawerInactiveTintColor: '#fff',
     drawerActiveTintColor: '#b38b74',
     drawerActiveBackgroundColor: '#ececec'
    }}>
      <Drawer.Screen name='Categories'
      component={CategoriesScreen}
      options={{
         drawerIcon: ({ color, size }) => (
          <Ionicons name='list-sharp' color={color} size={size} />
         ),
      }}
      />

      <Drawer.Screen name='Favorites'
       component={FavouriteScreen}
       options={{
        drawerIcon: ({ color, size }) => (
          <Ionicons name='heart-sharp' color={color} size={size} />
        )
       }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerStyle: { backgroundColor: '#b38b74' }, headerTintColor: '#fff', contentStyle: { backgroundColor: '#ececec' },}}>
            <Stack.Screen name='All categories' component={DrawerNavigator} options={{ headerShown: false }} />

            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetails} options={{title: 'About the Meal'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});