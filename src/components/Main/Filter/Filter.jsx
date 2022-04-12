import React from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../../features/filter/filterSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const handleClick = (event) => {
    dispatch(filter(event.target.value));
  };
  return (
    <div>
      <button value="Africa" onClick={handleClick}>
        Africa
      </button>
      <button value="America" onClick={handleClick}>
        America
      </button>
      <button value="Europe" onClick={handleClick}>
        Europe
      </button>
    </div>
  );
}
