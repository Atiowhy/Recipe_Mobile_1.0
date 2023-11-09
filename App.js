// // In App.js in a new project

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Login,
  Register,
  Home,
  Add,
  Search,
  Profile,
  Detail,
  MyRecipe,
  SaveLike,
  DetailMenu,
  EditMenu,
} from './src/pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs({}) {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <Ionicons name="home" size={30} color="rgba(239, 200, 26, 1)" />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="add-circle-outline"
              size={30}
              color="rgba(239, 200, 26, 1)"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="search-circle-outline"
              size={30}
              color="rgba(239, 200, 26, 1)"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => (
            <Ionicons
              name="person-circle-outline"
              size={30}
              color="rgba(239, 200, 26, 1)"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="register" component={Register} />
      <Stack.Screen name="myRecipe" component={MyRecipe} />
      <Stack.Screen name="MyApp" component={MyTabs} />
      <Stack.Screen name="detail" component={Detail} />
      <Stack.Screen name="saveLike" component={SaveLike} />
      <Stack.Screen name="detailMenu" component={DetailMenu} />
      <Stack.Screen name="editMenu" component={EditMenu} />
    </Stack.Navigator>
  );
}

export default App;
