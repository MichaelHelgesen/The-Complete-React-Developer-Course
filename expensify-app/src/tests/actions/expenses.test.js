import { addExpense, editExpense, removeExpense} from "../../actions/expenses";
import expenses from "../fixtures/expenses";

test ("Should setup remove expense action object", () => {
    const action = removeExpense({id: "abc123"});
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        expense: {
            id: "abc123"
        }
    });
});

test ("Should setup edit expense action object", () => {
    const action = editExpense("123", {note: "New note value"});
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "123",
        updates: {
            note: "New note value"
        }
        
    })
})

test("should setup add expense action object with provided values", () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test("should add expense to database and store", () => {
    
});

test("should add expense with defaults to database and store", () => {

});

// test("should setup add expense action object with default values", () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: "ADD_EXPENSE",
//     expense: {
//         id: expect.any(String),
//         description: "",
//         note: "",
//         amount: 0,
//         createdAt: 0     
//     }
//     })
// })