import React from "react";
import { shallow } from "enzyme";
import Scroll from "./Scroll";

let wrapper;
beforeEach(() => {
    const MockChild = () => {
        return null;
      };

  wrapper = shallow(<Scroll><MockChild/></Scroll>);
});

it("expects to render Scroll and Child component", () => {
    expect(wrapper).toMatchSnapshot();
  });