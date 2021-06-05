import React from "react";
import { shallow } from "enzyme";
import Helpandfaq from "./helpandfaq";

describe("Helpandfaq", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Helpandfaq />);
    expect(wrapper).toMatchSnapshot();
  });
});
