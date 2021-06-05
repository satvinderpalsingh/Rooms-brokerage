import React from "react";
import { shallow } from "enzyme";
import Map from "./map";

describe("Map", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Map />);
    expect(wrapper).toMatchSnapshot();
  });
});
