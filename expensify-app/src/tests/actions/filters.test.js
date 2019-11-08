import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filter";
import moment from "moment";

test("should setup set text filter with provided data", () => {
    const action = setTextFilter();
    expect(action).toEqual({
            type: "SET_TEXT_FILTER",
            text: ""
    })
});

test("should setup set text filter with provided data", () => {
    const text = "Something in";
    const action = setTextFilter(text);
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text
    })
});

test("should generate sort by date action generator", () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    });
});

test("should generate sort by amount action generator", () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    });
});

test("should generate set start date action object", () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        number: moment(0)
    });
});

test("should generate set end date action object", () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:"SET_END_DATE",
        number: moment(0)
    })
});

