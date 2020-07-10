import React from "react";
import { Icon, TouchableView, styled } from "bappo-components";

export const SquareButton = (props) => {
  const { iconName, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <Icon name={iconName} />
    </StyledButton>
  );
};

export const StyledButton = styled(TouchableView)`
  height: 70px;
  width: 70px;
  background-color: #ccf;
  justify-content: center;
  align-items: center;
  margin: 12px;
  border-radius: 5px;
`;
