/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "@/screens/NotFoundScreen";

import SearchScreens from "../screens/search";
import SearchHeader from "../screens/search/components/Header";

import HomeScreen from "../screens/home";

import MineScreen from "../screens/mine";

import MarketScreen from "../screens/market";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "~/types";

import LinkingConfiguration from "./LinkingConfiguration";
import TabBarIcon from "@/components/TabBar/TabBarIcon";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />

      
      <Stack.Screen
        name="Search"
        component={SearchScreens}
        options={({ route, navigation }) => {
          return {
            header: () => (
              <SearchHeader navigation={navigation} route={route} />
            ),
          };
        }}
      />
      
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].text,
        tabBarStyle: {
          width: "100%",
          height: 70
        },
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => null,
          title: "cHome",
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon active={focused} name='home' title="Home" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Market"
        component={MarketScreen}
        options={{
          title: "cMarket",
          header: () => null,
          tabBarLabel: 'Market',
          tabBarIcon: ({ focused }) => (
            <TabBarIcon active={focused} name='market' title="Market" />
          ),
        }}
      />

      <BottomTab.Screen
        name="Mine"
        component={MineScreen}
        options={{
          title: "Mine",
          header: () => null,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon active={focused} name='home' title="Home" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
