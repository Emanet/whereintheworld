import React from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../features/search/searchSlice";
export default function SearchBar() {
  const dispatch = useDispatch();
  const handleInput = (event) => {
    dispatch(update(event.target.value));
  };
  return (
    <div style={{ position: "absolute" }}>
      <input
        onInput={handleInput}
        type="text"
        placeholder="write country name"
      />
    </div>
  );
}
