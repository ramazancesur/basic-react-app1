import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import CounterComponents from '../components/CounterComponents';
import {increaseCounter, decreaseCounter} from '../store/actions/CounterActions'
import * as toaster from '../store/actions/GeneralActions'

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        width: 200,
    },
  }));

const CounterList = () => {
    const classes = useStyles();

    const counterReducer = useSelector(state => {
        return state.counterReducer;
    });

    
    const dispatch= useDispatch();

    const addButton=()=>{
        dispatch(increaseCounter())
    }
    
    const deleteButton=(id)=>{
        try {
            dispatch(decreaseCounter(id));
            dispatch(toaster.infoToast(I18n.t("record_delete_success")));
        } catch (error) {
            dispatch(toaster.errorToast(I18n.t("record_delete_error")+ error.message));
        }
    }

  
    return (
            <div>
                <div>
                <Button variant="contained" onClick={()=>addButton()} color="primary">
                    {I18n.t("addButton")}
                </Button>
                    
                </div>
                <div>
                {counterReducer.counterList.length !==0 &&
                    counterReducer.counterList.map(counter=> 
                        <CounterComponents key={counter.id} id={counter.id} buttonValue={counter.value} deleteButtonHandler= {deleteButton}/>
                    )
                } { counterReducer.counterList.length===0 &&  I18n.t("noData") } 

                </div>
            </div>
    
    )
}
 
export default CounterList;