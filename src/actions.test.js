import {
  CHANGE_SEARCHFIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import { apiCall } from "./api/api";
jest.mock("./api/api");

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./actions";

const mockStore = configureMockStore([thunk]); //This is typically placed in a test setup file

describe("setSearchField", () => {
  it("should create an action to search robots", () => {
    const text = "robot";
    const expectedAction = {
      type: CHANGE_SEARCHFIELD,
      payload: text,
    };
    expect(actions.setSearchField(text)).toEqual(expectedAction);
  });
});

describe("requestRobots", () => {
  it("handles requesting robots API", () => {
    const store = mockStore();
    apiCall.mockResolvedValue(true);

    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    const expectedAction = {
      type: REQUEST_ROBOTS_PENDING,
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it("handles successful robots API response", async () => {
    const store = mockStore();
    const data = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ];

    const expectedAction = {
      type: REQUEST_ROBOTS_SUCCESS,
      payload: data,
    };

    apiCall.mockResolvedValue(data);

    await store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[1]).toEqual(expectedAction);
  });

  it("handles failed robots API response", async () => {
    const store = mockStore();

    const expectedAction = {
      type: REQUEST_ROBOTS_FAILED,
      payload: "Error",
    };

    apiCall.mockRejectedValue('Error')

    await store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[1]).toEqual(expectedAction);
  });
});
