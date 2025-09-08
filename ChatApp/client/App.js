import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider/index";
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <GluestackUIProvider mode="light">
        <View style={styles.container}>
          <Text>AppChat</Text>
          <StatusBar style="auto" />
        </View>
      </GluestackUIProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
