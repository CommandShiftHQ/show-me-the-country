import React from "react";
import { mount } from "enzyme";
import CountryCard from "../../components/country-card";

const props = {
  country: {
    name: "some country",
    region: "some region",
    capital: "some capital",
    population: "12345567789907",
    altSpellings: ["SOME", "ALT", "SPELLING"],
    alpha2Code: 123
  }
};

let wrapper;

beforeEach(() => {
  wrapper = mount(<CountryCard {...props} />);
});

test("it renders the image with the correct source", () => {
  const image = wrapper.find("img");

  expect(image.props().src).toBe(
    `https://www.countryflags.io/${props.country.alpha2Code}/shiny/64.png`
  );
});

test("it renders the image with the correct source", () => {
  const name = wrapper.find("h2");

  expect(name.text()).toBe("some country");
});

test("it renders the image with the correct source", () => {
  const name = wrapper.find("h2");

  expect(name.text()).toBe("some country");
});

test("it renders an unnordered list with region, capital, and population", () => {
  const list = wrapper.find("ul");

  expect(list.childAt(0).text()).toBe("Region: some region");
  expect(list.childAt(1).text()).toBe("Capital: some capital");
  expect(list.childAt(2).text()).toBe("Population: 12,345,567,789,907");
});

test("it renders an unnordered list with an ordered list for AKA", () => {
  const orderedList = wrapper.find("ul").find("ol");

  expect(orderedList.children().length).toBe(props.country.altSpellings.length);
  expect(orderedList.childAt(0).text()).toBe("SOME");
  expect(orderedList.childAt(1).text()).toBe("ALT");
  expect(orderedList.childAt(2).text()).toBe("SPELLING");
});
