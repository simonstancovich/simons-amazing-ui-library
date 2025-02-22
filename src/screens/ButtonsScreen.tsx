import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import styled from "styled-components/native";
import * as Clipboard from "expo-clipboard";

interface ButtonProps {
  bgColor: string;
}

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: ButtonProps) => props.bgColor};
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

// Styled-components for the code snippet preview
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

const ButtonsScreen = () => {
  // State for background color and button text
  const [bgColor, setBgColor] = useState("#007bff");
  const [buttonText, setButtonText] = useState("Click Me!");

  // Generate a code snippet based on current state
  const codeSnippet = `
<StyledButton bgColor="${bgColor}">
  <ButtonText>${buttonText}</ButtonText>
</StyledButton>
`;

  // Function to copy the code snippet to clipboard
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(codeSnippet);
    Alert.alert(
      "Copied!",
      "The code snippet has been copied to your clipboard."
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buttons Preview</Text>

      {/* Preview area */}
      <View style={styles.previewContainer}>
        <StyledButton
          bgColor={bgColor}
          onPress={() =>
            Alert.alert("Button Pressed!", "You pressed the button.")
          }
        >
          <ButtonText>{buttonText}</ButtonText>
        </StyledButton>
      </View>

      {/* Controls to modify the button */}
      <View style={styles.controlsContainer}>
        <Text>Change Button Color (Hex):</Text>
        <TextInput
          style={styles.input}
          value={bgColor}
          onChangeText={setBgColor}
          placeholder="#007bff"
        />
        <Text>Change Button Text:</Text>
        <TextInput
          style={styles.input}
          value={buttonText}
          onChangeText={setButtonText}
          placeholder="Click Me!"
        />
      </View>

      {/* Display the generated code snippet */}
      <CodeSnippetContainer>
        <CodeSnippetText>{codeSnippet}</CodeSnippetText>
      </CodeSnippetContainer>

      {/* Button to copy the code snippet */}
      <TouchableOpacity style={styles.copyButton} onPress={copyToClipboard}>
        <Text style={styles.copyButtonText}>Copy Code</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for container and input fields (using StyleSheet for layout)
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
  previewContainer: {
    marginBottom: 20,
  },
  controlsContainer: {
    width: "100%",
    marginBottom: 20,
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

export default ButtonsScreen;
