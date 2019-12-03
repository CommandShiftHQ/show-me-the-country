import React from "react";
import "../styles/CountryCard.css";

const CountryCard = props => {
  const {
    country: { name, region, capital, population, altSpellings, alpha2Code }
  } = props;

  return (
    <div className="card-list">
      <div className="card">
        <img
          src={`https://www.countryflags.io/${alpha2Code}/shiny/64.png`}
          alt="flag"
          style={{ width: "100%" }}
        />
        <div className="card-details">
          <h2>
            <b>{name}</b>
          </h2>
          <ul className="country-details">
            <li>
              <b>Region: </b>
              {region}
            </li>
            <li>
              <b>Capital: </b>
              {capital}
            </li>
            <li>
              <b>Population: </b>
              {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </li>
            <li>
              <b>AKA: </b>
              <ol>
                {altSpellings.map((spelling, i) => (
                  <li key={i}>{spelling}</li>
                ))}
              </ol>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
