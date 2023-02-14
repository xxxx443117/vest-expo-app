/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "@/screens/NotFoundScreen";

import SearchScreens from "../screens/search";
import KlineScreens from "../screens/kline";
import SearchHeader from "../screens/search/components/Header";

import DownloadScreens from "../screens/download";
import DetailScreens from "../screens/home/Detail";

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
import BackHeader from "@/components/BackHeader";

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
        name="Kline"
        component={KlineScreens}
        options={({ route, navigation }) => {
          return {
            header: () => (
              <BackHeader />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Download"
        component={DownloadScreens}
        options={({ route, navigation }) => {
          return {
            header: () => (
              <BackHeader />
            ),
          };
        }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreens}
        options={({ route, navigation }) => {
          return {
            header: () => (
              <BackHeader />
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
  const { navigate } = useNavigation();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          width: "100%",
          height: 70,
          borderTopWidth: 0,
          backgroundColor: Colors[colorScheme].tabbarBackgroundColor,
        },
        tabBarIconStyle: {
          margin: 0,
          height: "auto",
          padding: 0,
        },
        tabBarLabelStyle: {
          marginBottom: 20 * 0.4,
          // fontSize: 20 * 0.7,
          // fontWeight: "bold",
          // lineHeight: 20 * 1.33,
          // color: '#0f0'
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
        options={() => ({
          title: "Mine",
          header: () => null,
          tabBarIcon: ({ focused }) => (
              <TabBarIcon active={focused} name='mine' title="Mine" />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}
