import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };

  wrapper = shallow(<MainPage {...mockProps} />);
});

describe("MainPage Component", () => {
  // Ensure mocks are cleared after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("expects to render MainPage component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("displays loading screen", () => {
    const mockPropsPendingResponse = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: "",
      isPending: true,
    };

    const wrapperPending = shallow(<MainPage {...mockPropsPendingResponse} />);
    expect(wrapperPending).toMatchSnapshot();
  });

  it("filters robots correct search", () => {
    const mockPropsCorrectSearch = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "john",
          email: "john@gamil.com",
        },
      ],
      searchField: "john",
      isPending: false,
    };

    const filteredRobotsCorrectSearch = mockPropsCorrectSearch.robots;
    const wrapper2 = shallow(<MainPage {...mockPropsCorrectSearch} />);
    expect(wrapper2.instance().filterRobots()).toEqual(
      filteredRobotsCorrectSearch
    );
  });

  it("filters robots incorrect search", () => {
    const mockPropsPopulatedIncorrectSearch = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 3,
          name: "john",
          email: "john@gamil.com",
        },
      ],
      searchField: "aaa",
      isPending: false,
    };

    const filteredRobotsIncorrectSearch = [];
    const wrapper3 = shallow(
      <MainPage {...mockPropsPopulatedIncorrectSearch} />
    );
    expect(wrapper.instance().filterRobots()).toEqual([]);
    expect(wrapper3.instance().filterRobots()).toEqual(
      filteredRobotsIncorrectSearch
    );
  });
});
