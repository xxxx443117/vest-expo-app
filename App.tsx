import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from 'react-native';
import { NativeBaseProvider, extendTheme, Box } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import { useExtendBaseTheme } from "./src/hooks/useExtendBaseTheme";
import Navigation from "./src/navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const themeConfig = useExtendBaseTheme();

  const theme = extendTheme(themeConfig);

  if (!isLoadingComplete) return null;
    
  return (
    <SafeAreaProvider>
      <StatusBar
        translucent={false}
        backgroundColor="transparent"
        style="light"
      />
      <SafeAreaView
        mode="padding"
        style={{ flex: 1, backgroundColor: "#12182b" }}
      >
        <NativeBaseProvider
          theme={theme}
        >
            <Navigation colorScheme={colorScheme} />

          {/* {Platform.OS !== "web" && <VConsole />} */}
        </NativeBaseProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}