import React from "react";
import ContryList from "./CountryList/CountryList";
import SearchBar from "./SearchBar/SearchBar";

export default function Main() {
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <SearchBar />
      <ContryList />
    </div>
  );
}
