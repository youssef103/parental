import AppComponent from "./App.component";

describe("Test ParentalCompensationApp Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AppComponent />);
  });

  it("should render ParentalCompensationApp correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
