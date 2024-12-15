import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';

const middlewares = [];
const createMockStore = configureStore(middlewares);

describe("App Component", () => {
  // Ensure mocks are cleared after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  const initialState = {
        searchField: '',
        robots: [],
        isPending: true
    }
  const mockStore = createMockStore(initialState);

  it("expects to render App component", () => {
    expect(shallow(<App store={mockStore} />)).toMatchSnapshot();
  });
});
