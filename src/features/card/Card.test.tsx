import { CardComponent } from "./components/Card.component";
import CardrReducer from "./Card.reducer";
import {
  LOAD_CARD,
  LOAD_CARD_SUCCESS,
  LOAD_CARD_FAILURE,
  ICard
} from "./Card.types";
import { setCardsData } from "../../store/selector";
import { AppState } from "../../store";
import { AppActions } from "../../store";

describe("Testin Card Component", () => {
  let wrapper: any;
  let props: any;
  beforeEach(() => {
    wrapper = render(<CardComponent {...props} />);
  });

  it("Should render empty div if cards array is empty", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("Testin CardReducer", () => {
  it("should setup default card values", () => {
    const state = CardrReducer(undefined, { type: "@@INIT" });

    expect(state).toEqual({
      loaded: true,
      data: []
    });
  });

  it("should load cards successfully", () => {
    const importantValuesToRenderCards: AppState = {
      priceBase: {
        pbb1: 47300
      },
      salaryInfo: {
        basicSalary: "36150",
        salaryModel: "Rörlig"
      }
    };
    const data: ICard[] = setCardsData(importantValuesToRenderCards);
    const action: AppActions = { type: LOAD_CARD_SUCCESS, data };

    const state = CardrReducer(undefined, action);

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
