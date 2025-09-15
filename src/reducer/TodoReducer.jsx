export function todoReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload.id);
        case "LOAD_TODOS":
            return action.payload;
        case "UPDATE_TODO":
            return state.map(todo => {
                if (todo.id === action.payload.id) {
                    return action.payload;
                }
                return todo;
            })
        default:
            return state;
    }
}