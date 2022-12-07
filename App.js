import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "@react-native-material/core";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text variant="h6">PROJECT wste</Text>
        <TextInput style={{ margin: 16 }} />
        <Button title="Click Me" />
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "center"
  },
  container2: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
