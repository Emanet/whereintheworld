import React from "react";
import ContryList from "./CountryList/CountryList";

export default function Main() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <ContryList />
    </div>
  );
}
