export const INCREMENT = "INCREMENT";
export const DESCREMENT = "DESCREMENT";


const initialState = {
    count: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DESCREMENT:
            state = { ...state, count: state.count - 1 }
            return state;

        case INCREMENT:
            state = { ...state, count: state.count + 1 }
            return state;

        default:
            return state;
    }

}