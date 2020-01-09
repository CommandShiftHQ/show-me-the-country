import React from "react";
import { mount } from "enzyme";
import InputField from "../../components/input-field";

test("it renders", () => {
  const wrapper = mount(<InputField />);

  expect(wrapper.exists()).toBe(true);
});

test("it renders a form", () => {
  const wrapper = mount(<InputField />);
  const form = wrapper.find("form");

  expect(form.exists()).toBe(true);
});

test("it renders an input field inside the form", () => {
  const wrapper = mount(<InputField />);
  const form = wrapper.find("form");
  const input = form.find(".search-term");

  expect(input.exists()).toBe(true);
});

test("it renders a button inside the form", () => {
  const wrapper = mount(<InputField />);
  const form = wrapper.find("form");
  const button = form.find(".search-button");

  expect(button.exists()).toBe(true);
});

test("it renders a button with an icon", () => {
  const wrapper = mount(<InputField />);
  const icon = wrapper.find(".search-button").find(".fa-search");

  expect(icon.exists()).toBe(true);
});

test("the input field initialises empty", () => {
  const wrapper = mount(<InputField />);
  const input = wrapper.find(".search-term");

  expect(input.props().value).toBe("");
});

test("the input field value is whatever it is written", () => {
  const wrapper = mount(<InputField />);

  wrapper.find("input").simulate("change", {
    target: { value: "hello" }
  });

  const input = wrapper.find("input");

  expect(input.props().value).toBe("hello");
});

test("upon clicking search expect the prop handler to be called", () => {
  const props = {
    gimmeTheSearchValue: jest.fn()
  };

  const wrapper = mount(<InputField {...props} />);

  wrapper.find("input").simulate("change", {
    target: { value: "search value" }
  });

  wrapper.find("button").simulate("click");

  expect(props.gimmeTheSearchValue).toHaveBeenCalled();
  expect(props.gimmeTheSearchValue).toHaveBeenCalledTimes(1);
  expect(props.gimmeTheSearchValue).toHaveBeenCalledWith("search value");
});
