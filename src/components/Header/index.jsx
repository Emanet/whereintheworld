import React from "react";
import ScreenMode from "./ScreenMode";
import { StyledHeader } from "./style";
import Title from "./Title";

export default function Header() {
  return (
    <StyledHeader>
      <Title />
      <ScreenMode />
    </StyledHeader>
  );
}
