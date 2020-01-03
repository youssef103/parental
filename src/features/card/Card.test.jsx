import CardComponent from "./CardComponent";
import CardrReducer from "./CardReducer";

describe("Testin CardComponent", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardComponent arrData={[]} />);
  });

  it("Should render empty ul if arrData is empty", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testin CardReducer", () => {
  it("should return initialState", () => {
    const initialState = [];

    expect(CardrReducer(initialState, {})).toEqual(initialState);
  });
});
