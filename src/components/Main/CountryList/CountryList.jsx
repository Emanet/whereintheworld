import React from "react";
import { useEffect, useState, useMemo } from "react";
import FetchAllCountry from "../../../api/services/Country";
export default function ContryList() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    FetchAllCountry().then((data) => setCountry(data));
  }, []);
  const orderedCountries = useMemo(
    () => country.sort((a, b) => a.name.common.localeCompare(b.name.common)),
    [country]
  );
  console.log(orderedCountries);
  return orderedCountries.map((item) => {
    return (
      <div
        style={{
          width: "200px",
          margin: "2em",
          height: "300px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <img style={{ width: "100%" }} src={item.flags.png} alt="" />
        <div>
          <h3>{item.name.common}</h3>
          <div>
            <div>
              <strong>Population: </strong> {item.population}
            </div>
            <div>
              <strong>Region: </strong> {item.region}
            </div>
            <div>
              <strong>Capital: </strong> {item.capital}
            </div>
          </div>
        </div>
      </div>
    );
  });
}
