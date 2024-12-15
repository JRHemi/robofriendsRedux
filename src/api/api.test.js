import { apiCall } from "./api";
import fetchMock from "jest-fetch-mock";

const URL = "https://jsonplaceholder.typicode.com";
describe("api call", () => {
  fetchMock.enableMocks();

  beforeEach(() => {
    fetchMock.resetMocks(); // reset mocks before each test
  });

  it("should return successful promise", () => {
    const extension = "/users";
    const users = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(users));
    const fetchLink = URL + extension;

    apiCall(fetchLink).then((value) => {
      expect(value).toEqual(users);
      expect(fetchMock).toHaveBeenCalledWith(fetchLink);
    });
  });
});
