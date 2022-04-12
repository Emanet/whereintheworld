import React from "react";
import { useEffect, useState, useMemo } from "react";
import { StyledCountryList } from "./style";
import { useSelector } from "react-redux";
import FetchAllCountry from "../../../api/services/Country";
export default function ContryList() {
  const filterContinets = useSelector((state) => state.filter.value);
  const searchCountry = useSelector((state) => state.update.value);
  const [country, setCountry] = useState([]);
  useEffect(() => {
    FetchAllCountry().then((data) => setCountry(data));
  }, []);
  const orderedCountries = useMemo(
    () => country.sort((a, b) => a.name.common.localeCompare(b.name.common)),
    [country]
  );
  return orderedCountries
    .filter((item) => {
      if (filterContinets) {
        console.log(filterContinets);
        return item.continents.some((v) => v.includes(filterContinets));
      } else {
        return item.name.common
          .toLowerCase()
          .includes(searchCountry.toLowerCase());
      }
    })
    .map((item) => {
      return (
        <StyledCountryList>
          <img
            style={{
              width: "100%",
              height: "139px",
              borderRadius: "20px 20px 0 0 ",
            }}
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
