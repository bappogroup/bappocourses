import React from "react";
import { Text, View, Button, Alert, styled } from "bappo-components";

export default function Alert1() {
  return (
    <StyledView>
      <StyledButton
        text="Click Me"
        onPress={() => Alert.alert("hello, I am an alert!!")}
      />
      <StyledButton
        text="Click Me"
        onPress={() => Alert.alert("hello, I am an alert!!")}
      />
    </StyledView>
  );
}

const StyledView = styled(View)`
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)`
  margin: 12px;
`;
