import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import WebView from "react-native-webview";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Web = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <StatusBar style="auto" />
      <WebView
        style={styles.container}
        source={{
          uri: __DEV__ ? "http://192.168.200.131:3000/" : "https://staywith.kr",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Web;
