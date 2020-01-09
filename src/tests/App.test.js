import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import App from "../App";
import InputField from "../../src/components/input-field";
import CountryCard from "../../src/components/country-card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("it renders an input field", () => {
  const wrapper = mount(<App />);
  const inputField = wrapper.find(InputField);

  expect(inputField.exists()).toBe(true);
});

test("make an api call upon receiving a country value", () => {
  global.fetch = jest.fn(() => Promise.resolve());

  const wrapper = mount(<App />);

  wrapper.find("input").simulate("change", {
    target: { value: "search-value-in-app" }
  });

  wrapper.find("button").simulate("click");

  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(
    "https://restcountries-v1.p.rapidapi.com/name/search-value-in-app",
    {
      headers: {
        "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
        "x-rapidapi-key": "977fb23600msh4ddc20963134706p1b5b50jsn076334f6d9fb"
      },
      method: "GET"
    }
  );
});

test("it renders a Country Card with values received from the api", done => {
  const mockSuccessResponse = [
    {
      country: {
        name: "some country",
        region: "some region",
        capital: "some capital",
        population: "12345567789907",
        altSpellings: ["SOME", "ALT", "SPELLING"],
        alpha2Code: 123
      }
    }
  ];
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise
  });

  jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);

  const wrapper = mount(<App />);

  wrapper.find("input").simulate("change", {
    target: { value: "search-value-in-app" }
  });

  wrapper.find("button").simulate("click");

  process.nextTick(() => {
    const countryCard = wrapper.find(CountryCard);

    expect(countryCard.exists()).toBe(true);

    global.fetch.mockClear();
    done();
  });
});
