import React from "react";
import { shallow } from "enzyme";
import Ownerdashboard from "./ownerdashboard";

describe("Ownerdashboard", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ownerdashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
