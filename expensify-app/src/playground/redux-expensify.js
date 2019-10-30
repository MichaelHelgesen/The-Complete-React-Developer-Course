import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const addExpense = (
    { 
        description = "", 
        note = "", 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt

    }
});

const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    expense: {
        id
    }
});

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates 
});


// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(function (item){
                return item.id != action.expense.id
            });
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);


store.subscribe(() => {
    console.log(store.getState());
})

const expenseOne = store.dispatch(addExpense({description: "Rent", amount: 100}));
const expenseTwo= store.dispatch(addExpense({description: "Coffee", amount: 200}));

store.dispatch(removeExpense( { id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 } ));

const demoState = {
    expenses: [{
        id: "gggfg",
        description: "JAnuary rent",
        note: "This was the final payment for that address.",
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: "rent",
        sortBy: "amount",
        startDate: undefined,
        endDate: undefined
    }
};