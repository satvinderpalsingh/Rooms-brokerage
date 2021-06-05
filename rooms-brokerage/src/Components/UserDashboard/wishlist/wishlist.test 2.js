import React from "react";
import { shallow } from "enzyme";
import Wishlist from "./wishlist";

describe("Wishlist", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Wishlist />);
    expect(wrapper).toMatchSnapshot();
  });
});
