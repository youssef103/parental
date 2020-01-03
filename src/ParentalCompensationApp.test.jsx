import ParentalCompensationApp from "./ParentalCompensationApp";

describe("Test ParentalCompensationApp Component", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ParentalCompensationApp />);
  });

  it("should render ParentalCompensationApp correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
