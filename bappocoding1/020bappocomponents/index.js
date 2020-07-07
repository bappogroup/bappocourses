import React from "react";
import { Text, View, Button, Alert, styled } from "bappo-components";

export default function Alert1() {
  return (
    <View>
      <StyledText>Hello World</StyledText>
      <Button
        text="Click Me"
        onPress={() => Alert.alert("hello, I am an alert!!")}
      />
    </View>
  );
}

const StyledText = styled(Text)`
  color: blue;
`;
