import React from "react";
import { Alert, View, Text } from "bappo-components";
import { SquareButton, StyledButton } from "./myStyledComponents";

export default () => {
  return (
    <View>
      <SquareButton iconName="home" onPress={() => Alert.alert("Hello")} />
      <SquareButton iconName="call" onPress={() => Alert.alert("Hello")} />
      <StyledButton>
        <Text>Hello</Text>
      </StyledButton>
    </View>
  );
};
