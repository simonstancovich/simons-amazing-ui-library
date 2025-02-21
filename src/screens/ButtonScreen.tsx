// src/screens/ButtonsScreen.tsx

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

const StyledButton = styled.TouchableOpacity`
  background-color: #007bff;
  padding: 10px 20px;
  border-radius: 5px;
  margin: 10px 0;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

const ButtonsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buttons Preview</Text>
      <StyledButton onPress={() => alert("Button Pressed!")}>
        <ButtonText>Click Me!</ButtonText>
      </StyledButton>
      {/* Later, you can add more interactive features, such as dynamic styling and code snippet generation */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default ButtonsScreen;
