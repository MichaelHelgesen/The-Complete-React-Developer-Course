import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
    const state = filtersReducer(undefined, { type: "@@INIT"});
    expect(state).toEqual({
        text: "",
        sortBy: "date",
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month")
    })
});

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"});
    expect(state.sortBy).toBe("amount");
})

test("should set sortBy to date", () => {
    const currenState = {
        text: "",
        startDate: undefined,
        sortBy: "amount"
    }
    const action = { type: "SORT_BY_DATE"};
    const state = filtersReducer(currenState, action);
    expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
    const text = "This is my filter";
    const action = { type: "SET_TEXT_FILTER",
                    text};
    const state = filtersReducer(text, action);
    expect(state.text).toBe("This is my filter");
});

test("should set startDate filter", () => {
    const startDate = moment(0);
    const action = { 
        type: "SET_START_DATE",
        startDate: startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(action.startDate);
});

test("should set endDate filter", () => {
    const endDate = moment(0);
    const action = { 
        type: "SET_END_DATE",
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(action.endDate);
});