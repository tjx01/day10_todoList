export function todoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            /// copy
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }

                return value
            })
        case "ADD_TODO":
            const nextId = state.length > 0 ? Math.max(...state.map(item => item.id)) + 1 : 1;
            return [
                ...state,
                {
                    id: nextId,
                    text: action.payload.text,
                    done: false
                }
            ];
        case "DELETE_TODO":
            return state.filter(item => item.id !== action.payload.id);
        case "LOAD_TODOS":
            return action.payload;
        default:
            return state;
    }
}