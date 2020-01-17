import AppComponent from "./App.component";

describe("Test ParentalCompensationApp Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParentalCompensationApp />);
  });

  it("should render ParentalCompensationApp correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
