import React from "react";
import { shallow } from "enzyme";
import Userhomepage from "./userhomepage";

describe("Userhomepage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Userhomepage />);
    expect(wrapper).toMatchSnapshot();
  });
});
