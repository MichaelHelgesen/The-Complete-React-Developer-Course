import { addExpense, editExpense, removeExpense} from "../../actions/expenses";

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