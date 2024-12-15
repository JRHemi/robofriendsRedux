import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";
import { count } from "console";

describe("CounterButton Component", () => {
  // Ensure mocks are cleared after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("expects to render CounterButton component", () => {
    const mockColor = "green";
    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
  });

  it("expects click to increment the counter", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);

    expect(wrapper.state()).toEqual({ count: 0 });
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual("red");
  });

  it("expects component will only update when count changes", () => {
    const mockColor = "red";
    const wrapper = shallow(<CounterButton color={mockColor} />);
    expect(wrapper.state()).toEqual({ count: 0 });

    const instance = wrapper.instance();
    expect(instance.shouldComponentUpdate({ count: 0 })).toEqual(false);
    expect(instance.shouldComponentUpdate({ count: 1 })).toEqual(true);
  });
});
