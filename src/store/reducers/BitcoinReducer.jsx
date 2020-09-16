import {FETCH_BITCOIN_DATA, DATA_IS_LOADING} from '../utils/ActionTypes'

const initData= {
    bitcoinData: [],
    isLoading: false
};

const dataLoading= (state, action)=>{
    return {
        ...state,
            isLoading: action.value
    };
}

const fetchData= (state, action)=>{
    return {
        ...state,
            bitcoinData: action.data
    };
}

const BitcoinReducer = (state= initData, action) => {
    switch(action.type){
        case FETCH_BITCOIN_DATA:
            return fetchData(state, action);
        case DATA_IS_LOADING:
            return dataLoading(state, action);
        default:
            return state;
    }
}
 
export default BitcoinReducer;