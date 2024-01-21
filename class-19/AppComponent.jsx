import { useState } from "react";
import {
  Text,
  TextInput,
//   Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// You can import supported modules from npm
import { Card } from "react-native-paper";

export default function App() {
  const [text, setText] = useState("");
  const [view, setView] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Type Text"
        style={{ borderWidth: 1 }}
        onChangeText={(value) => {
          setText(value);
        }}
        value={text}
      />

      <TouchableOpacity
        title="Submit"
        onPress={() => {
          setView(text);
          console.log(view, text);
        }}
      >
        <Text>SUBMIT button</Text>
      </TouchableOpacity>

      <Card>
        <Text>{view}</Text>
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: "#ecf0f1",
    padding: 8,
    marginTop: 40,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
