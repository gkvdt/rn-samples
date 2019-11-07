import { INCREMENT, DESCREMENT } from "../reducers/counter"

export const increase = () => {
    return {
        type: INCREMENT
    }
}
export const descrease = () => {
    return {
        type: DESCREMENT
    }
}

