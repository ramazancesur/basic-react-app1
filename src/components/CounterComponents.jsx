import React, {useState } from 'react';
import { I18n } from 'react-redux-i18n';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {increaseCounterValue, decreaseCounterValue} from '../store/actions/CounterActions'
import ConfirmDialog from './ConfirmDialog';

const CounterComponents = (props) => {
    const {id, buttonValue, deleteButtonHandler}= props;
    const dispatch= useDispatch();

    const increase = (id, buttonValue)=>{    
        dispatch(increaseCounterValue(id, buttonValue))
    }
    const decrease= (id, buttonValue) =>{
        dispatch(decreaseCounterValue(id,buttonValue))
    }

    const [confirmOpen, setConfirmOpen] = useState(false)

    
    const deleteOnClick = () => {
        setConfirmOpen(true);
    };

    return ( 
        <div className="btn-group" role="group" aria-label="Basic example">
            <FormLabel component="legend">{I18n.t("countValue") + buttonValue}</FormLabel>
                    <Button variant="contained" onClick={()=>increase(id, buttonValue)} color="primary">
                        {I18n.t("increase")}
                    </Button>
                    <Button variant="contained" onClick={()=> decrease(id, buttonValue)} color="primary">
                        {I18n.t("decrease")}
                    </Button>

                    <Button variant="contained" onClick={()=> deleteOnClick(id)} color="primary">
                        {I18n.t("deleteButton")}
                    </Button>

                    <ConfirmDialog
                                title={""}
                                open={confirmOpen}
                                setOpen={setConfirmOpen}
                                onConfirm={()=>deleteButtonHandler(id)}
                            >
                                {I18n.t("confirmDialog")}
                            </ConfirmDialog>
        </div>

    
     );
}
 
export default CounterComponents;