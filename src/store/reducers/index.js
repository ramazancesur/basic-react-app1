import {combineReducers} from 'redux'
import { i18nReducer } from "react-redux-i18n";
import {reducer as toastrReducer} from 'react-redux-toastr'

import CounterReducer  from './CounterReducers'

const rootReducer= combineReducers({
    counterReducer:CounterReducer,
    i18n: i18nReducer,
    toastr: toastrReducer
});

export default rootReducer;