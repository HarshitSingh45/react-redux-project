import {INCREMENT, DECREMENT} from './action'

const initialState = {
    number: 10
}

export const reducer = (state=initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1
            }
        default: return state
    }
}