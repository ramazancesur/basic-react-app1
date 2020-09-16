import {FETCH_BITCOIN_DATA, DATA_IS_LOADING} from '../utils/ActionTypes'
import {fetchBitcoinHistoricalData} from '../../services/EndPoints'
import * as toaster from './GeneralActions'

export const fetchBitcoinHistoricData= ()=>{
    const success = (data) => { return { type: FETCH_BITCOIN_DATA, data } };
    const loading= (value)=> { return { type: DATA_IS_LOADING, value }}
    return dispatch=> {
        dispatch(loading(true));
        fetchBitcoinHistoricalData()
            .then((response)=>{
                dispatch(success(response.data.data.entries.map( x=> x[1])));
                dispatch(loading(false));
            }).catch( (error)=> {
                dispatch(loading(false));
                dispatch(toaster.errorToast("server error : " + error.message));
            });
            
    }
}