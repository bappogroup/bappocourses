import React, { useState } from "react";
import { View, Button, Icon, styled } from "bappo-components";

export default () => {
  const [humanstate, sethumanstate] = useState("happy");
  const iconname = humanstate === "happy" ? "tag-faces" : "face";
  return (
    <View style={viewstyle}>
      <Button
        text="is happy"
        onPress={() => {
          sethumanstate("happy");
        }}
      />
      <Icon name={iconname} />
      <Button
        text="is not happy"
        onPress={() => {
          sethumanstate("nothappy");
        }}
      />
    </View>
  );
};

const viewstyle = {
  margin: 30,
  flexDirection: "row",
  justifyContent: "space-around",
};
