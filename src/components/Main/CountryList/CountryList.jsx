import React from "react";
import { useEffect, useState, useMemo } from "react";
import { StyledCountryList } from "./style";
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
      <StyledCountryList>
        <img
          style={{ width: "100%", height: "139px" }}
          src={item.flags.png}
          alt=""
        />
        <div style={{ marginLeft: "10%" }}>
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
      </StyledCountryList>
    );
  });
}
