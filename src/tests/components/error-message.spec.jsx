import React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "../../components/error-message";

test("it renders an error message", () => {
  const wrapper = shallow(<ErrorMessage />);
  const div = wrapper.find("div");

  expect(div.text()).toBe("×Opps something went wrong!");
});
