import * as actionTypes from "../utils/ActionTypes"

export const increaseCounterValue=(id, value)=>{
    return dispatch=> {
        dispatch({
            type: actionTypes.INCREASE_COUNTER_VALUE,
            id, value
        });
    }
}

export const decreaseCounterValue=(id, value)=>{
    return dispatch=> {
        dispatch({
            type: actionTypes.DECREASE_COUNTER_VALUE,
            id, value
        });
    }
}

export const increaseCounter=(currentValue=0)=>{
    return {
        type:actionTypes.INCREASE_COUNTER,
        currentValue: currentValue
    };
}


export const decreaseCounter=(id=-1)=>{
    return dispatch=> {
        dispatch({
            type: actionTypes.DECREASE_COUNTER,
            id
        });
    }
}