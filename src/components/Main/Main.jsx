import React from "react";
import ContryList from "./CountryList/CountryList";
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar/SearchBar";

export default function Main() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <SearchBar />
        <Filter />
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ContryList />
      </div>
    </div>
  );
}
