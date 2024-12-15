import React from "react";
import { shallow } from "enzyme";
import CardList from "./CardList";



it("expects to render CardList component", () => {
    const mockRobots = [
        {
            id: 1,
            name: "John Hemi",
            username: "Hemipro",
            email: "john@gmail.com"
        }
    ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
