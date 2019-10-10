export const ADD_TODO = "ADD_TODO";

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            state = [...state, action.payload.todo]
            return state;

        default:
            return state;
    }

}