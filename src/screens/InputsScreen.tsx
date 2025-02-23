import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput as RNTextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import * as Clipboard from "expo-clipboard";

const StyledInput = styled.TextInput<{ borderColor: string }>`
  border-width: 1px;
  border-color: ${({ borderColor }: { borderColor: string }) => borderColor};
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
`;

const CodeSnippetContainer = styled.View`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
`;

const CodeSnippetText = styled.Text`
  font-family: monospace;
  font-size: 14px;
`;

const InputsScreen = () => {
  const [borderColor, setBorderColor] = useState("#000000");
  const [placeholder, setPlaceholder] = useState("Enter text...");
  const [inputValue, setInputValue] = useState("");

  const codeSnippet = `
<StyledInput 
  borderColor="${borderColor}" 
  placeholder="${placeholder}" 
  value="${inputValue}" 
/>
`;

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(codeSnippet);
    Alert.alert(
      "Copied!",
      "The code snippet has been copied to your clipboard."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Preview</Text>

      {/* Preview of the styled input */}
      <StyledInput
        borderColor={borderColor}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={setInputValue}
      />

      {/* Controls to dynamically update input properties */}
      <View style={styles.controlsContainer}>
        <Text>Change Border Color (Hex):</Text>
        <RNTextInput
          style={styles.input}
          value={borderColor}
          onChangeText={setBorderColor}
          placeholder="#000000"
        />
        <Text>Change Placeholder Text:</Text>
        <RNTextInput
          style={styles.input}
          value={placeholder}
          onChangeText={setPlaceholder}
          placeholder="Enter text..."
        />
      </View>

      <CodeSnippetContainer>
        <CodeSnippetText>{codeSnippet}</CodeSnippetText>
      </CodeSnippetContainer>

      <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.copyButtonText}>Copy Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  controlsContainer: {
    width: "100%",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  copyButton: {
    backgroundColor: "#28a745",
    padding: 10,
    borderRadius: 5,
  },
  copyButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default InputsScreen;
