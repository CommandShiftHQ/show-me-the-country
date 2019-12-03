import React, { Component } from "react";
import InputField from "./components/input-field";
import CountryCard from "./components/country-card";
import ErrorMessage from "./components/error-message";

import "./styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      countryDetails: "",
      error: false
    };
  }

  getMeSomeCountryData = countryToSearch => {
    fetch(`https://restcountries-v1.p.rapidapi.com/name/${countryToSearch}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "977fb23600msh4ddc20963134706p1b5b50jsn076334f6d9fb"
      }
    })
      .then(response => response.json())
      .then(responseInJson => {
        if (responseInJson.status && responseInJson.status !== 200) {
          throw new Error("Ooopsies, something gone wrong");
        }

        return this.setState({ countryDetails: responseInJson[0] });
      })
      .catch(error => {
        this.setState({ error: true, countryDetails: "" });
      });
  };

  closeTheErrorMessage = () => {
    this.setState({ error: false });
  };

  render() {
    const { countryDetails, error } = this.state;

    return (
      <div className="wrap">
        <InputField gimmeTheSearchValue={this.getMeSomeCountryData} />
        {error && <ErrorMessage handleOnClick={this.closeTheErrorMessage} />}
        {countryDetails && <CountryCard country={countryDetails} />}
      </div>
    );
  }
}

export default App;
