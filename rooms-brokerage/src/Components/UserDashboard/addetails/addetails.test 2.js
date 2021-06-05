import React from "react";
import { shallow } from "enzyme";
import Addetails from "./addetails";

describe("Addetails", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Addetails />);
    expect(wrapper).toMatchSnapshot();
  });
});
