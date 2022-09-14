const initState = {
    todoList: [
        { id: 1, name: 'quet nha' },
        { id: 2, name: 'lau nha' },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'addTodoInput':
            return {
                ...state,
                todoList: [...state.todoList, action.payload],
            };
        default:
            return state;
    }
};

export default rootReducer;
