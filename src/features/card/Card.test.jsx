import Card from "./Card";
import CardrReducer from "./reducer";

describe("Testin Card Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card arrData={[]} />);
  });

  it("Should render empty ul if arrData is empty", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testin CardReducer", () => {
  it("should return initialState", () => {
    const initialState = {
      loaded: false,
      data: []
    };

    expect(CardrReducer(initialState, {})).toHaveLength(0);
  });
});
