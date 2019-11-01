

export const setTextFilter = ( text = "" ) => ({
    type: "SET_TEXT_FILTER",
    text 
});

export const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

export const setStartDate = (number) => ({
    type: "SET_START_DATE",
    number
});

export const setEndDate = (number) => ({
    type: "SET_END_DATE",
    number
});