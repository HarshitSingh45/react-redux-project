export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increaseNum = () => {
    return {
        type: INCREMENT
    }
}

export const decreaseNum = () => {
    return {
        type: DECREMENT
    }
}