import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

describe("SearchBox Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
      });

      it("expects to render SearchBox component", () => {
        const searchChangeMock = jest.fn();
        const wrapper = shallow(<SearchBox searchChange={searchChangeMock}/>)
        expect(wrapper).toMatchSnapshot();
      });

      it("expects to trigger searchChange on new input", () => {
        const searchChangeMock = jest.fn();
        const wrapper = shallow(<SearchBox searchChange={searchChangeMock}/>)
        expect(searchChangeMock).toHaveBeenCalledTimes(0);
    
        wrapper.find('input').simulate('change', { target: { value: 'Robots' } })
        expect(searchChangeMock).toHaveBeenCalled();
        expect(searchChangeMock).toHaveBeenCalledTimes(1);
      });
})

