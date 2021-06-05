import React from "react";
import { shallow } from "enzyme";
import Aboutus from "./aboutus";

describe("Aboutus", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Aboutus />);
    expect(wrapper).toMatchSnapshot();
  });
});
