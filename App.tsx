import { SafeAreaProvider } from "react-native-safe-area-context";
import Web from "./components/Web";

export default function App() {
  return (
    <SafeAreaProvider>
      <Web />
    </SafeAreaProvider>
  );
}
