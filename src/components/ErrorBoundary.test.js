import React from "react";
import { shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";
// import { describe } from "node:test";

describe("ErrorBoundary", () => {

  it("expects to render Child component", () => {
    const MockChild = () => {
      return null;
    };

    const wrapper = shallow(<ErrorBoundary><MockChild /></ErrorBoundary>);
    expect(wrapper).toMatchSnapshot();
  });
  
  it("logs error", () => {
    const MockChild = () => {
      return null;
    };

    const wrapper = shallow(<ErrorBoundary><MockChild /></ErrorBoundary>);
    const error = new Error('test error');
    wrapper.find(MockChild).simulateError(error);
    expect(wrapper.find("h1").text()).toBe('Something went wrong.');
  });
});


