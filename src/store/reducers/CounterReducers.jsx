import {findMaxID} from "../../utils/Utils"
import * as actionTypes from "../utils/ActionTypes"

const initalState = {
  counterList: []
}

const increaseCounter= (state, action)=>{
    const {counterList} = state;
    counterList.push({id: findMaxID(counterList), value: action.currentValue})
    return {
        ...state,
            counterList
    }
}

const increaseCounterValue= (state, action)=>{
    let {counterList} = state;
    const {id, value: currentValue}= action;
    const index=counterList.findIndex(counter=> counter.id === id);
    counterList[index].value= currentValue+1;
    return {
        ...state,
            counterList
    }
}


const decreaseCounter= (state, action)=>{
    let {counterList} = state;
    counterList= counterList.filter(counter=> counter.id !== action.id);
    return {
        ...state,
            counterList
    }
}


const decreaseCounterValue= (state, action)=>{
    let {counterList} = state;
    const {id}= action;
    const index=counterList.findIndex(counter=> counter.id === id);
    counterList[index].value-=1;
    return {
        ...state,
            counterList
    }
}


const CounterReducer = (state= initalState , action) => {
    switch( action.type) {
        case actionTypes.INCREASE_COUNTER:
            return increaseCounter(state, action);
        case actionTypes.DECREASE_COUNTER:
            return decreaseCounter(state, action);
        case actionTypes.INCREASE_COUNTER_VALUE:
            return increaseCounterValue(state, action);
        case actionTypes.DECREASE_COUNTER_VALUE:
            return decreaseCounterValue(state, action);
        default:
            return state;
    }
}
 
export default CounterReducer;