import React from "react";
import ScreenMode from "./ScreenMode/ScreenMode";
import Title from "./Title/Title";
import { StyledHeader } from "./style";

export default function Header() {
  return (
    <StyledHeader>
      <Title />
      <ScreenMode />
    </StyledHeader>
  );
}
