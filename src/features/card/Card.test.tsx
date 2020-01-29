import { CardComponent } from "./components/Card.component";
import CardrReducer from "./Card.reducer";
import {
  LOAD_CARD,
  LOAD_CARD_SUCCESS,
  LOAD_CARD_FAILURE,
} from "./Card.types";
import { setCardsData } from "../../store/selector";

describe("Testin Card Component", () => {
  let wrapper;
  let props;
  beforeEach(() => {
    wrapper = render(<CardComponent {...props} />);
  });

  it("Should render empty div if cards array is empty", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testin CardReducer", () => {
  it("should setup default card values", ()=>{
    const state= CardrReducer(undefined, {type:"@@INIT"});

    expect(state).toEqual({
      loaded: true,
      data: []
    });
  })

  it("should load cards successfully", () => {
    const currentState = {
      critera: {
        birthday: '2020-01-01T11:00:00.000Z',
        status: 'mer än ett år',
        compensationPeriod: 'Dynabyte ersätter dig med upp till två månaders föräldralön.',
        errors: {
          status: '',
          birthday: ''
        }
      },
      priceBase: {
        pbb1: 47300,
        duration: {
          startDate: '2020-01-09T11:00:00.000Z',
          endDate: '2020-02-25T11:00:00.000Z'
        },
        errors: {
          startDate: '',
          endDate: '',
          pbb1: '',
          pbb2: ''
        }
      },
      salaryInfo: {
        basicSalary: '36150',
        salaryModel: 'Rörlig',
        errors: {
          basicSalary: '',
          salaryModel: ''
        }
      },
      cards: {
        loaded: false,
        data: []
    }
    };
    const data= setCardsData(currentState);
    const action= {type: LOAD_CARD_SUCCESS, data}

    const state= CardrReducer(undefined,action)

    expect(state).toEqual({
      loaded: true,
      data: [
        {
          ConvertedBasicSalary: 44645.25,
          max10PBB: 473000,
          max15PBB: 709500,
          excessFixedSalary: 62743,
          parentalSalaryUpto10PBB: 3887.67,
          parentalSalaryAbove10PBB: 4641.26,
          total: 8528.93
        }
      ]
    });
      
    expect(state.data).toHaveLength(1);
  });

});
