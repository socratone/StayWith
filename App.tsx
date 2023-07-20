import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        style={styles.container}
        source={{ uri: "https://staywith.kr" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
