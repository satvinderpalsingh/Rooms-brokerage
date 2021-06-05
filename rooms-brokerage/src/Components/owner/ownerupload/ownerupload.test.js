import React from "react";
import { shallow } from "enzyme";
import Ownerupload from "./ownerupload";

describe("Ownerupload", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Ownerupload />);
    expect(wrapper).toMatchSnapshot();
  });
});
