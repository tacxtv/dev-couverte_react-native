import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

export default function YepScreen() {
  console.log("Yep from pazuzu in twitch chat: " + new Date().toISOString());
  const [text, setText] = useState("");
  return (
    <ThemedView>
      <Text style={styles.headerImage}>Yep from pazuzu in twitch chat</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        placeholder="Type here to translate!"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      ></TextInput>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
