import React from "react";

import { View, Text, styled } from "bappo-components";

export const Row = styled(View)`
  padding: 8px;
  flex-direction: row;
  margin: 2px;
  background-color: white;
  overflow: hidden;
`;

export const Cell = styled(Text)`
  width: 120px;
  margin-left: 16px;
`;

export const Container = styled(View)`
  flex: 1;
  background-color: #f8f8f8;
  padding: 16px;
`;
