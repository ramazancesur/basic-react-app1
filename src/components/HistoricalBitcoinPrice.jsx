import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { I18n } from 'react-redux-i18n';

import {fetchBitcoinHistoricData} from '../store/actions/BitcoinActions'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';


import { CircularProgress } from '@material-ui/core';

const HistoricalBitcoinPrice = () => {
    const dispatch = useDispatch();
    const bitcoinReducer= useSelector((state) => {
        return state.bitcoinReducer;
    });
    const {bitcoinData,isLoading}= bitcoinReducer;
    
    useEffect(() => {
        dispatch(fetchBitcoinHistoricData())
    }, [bitcoinData.length]);

    const options = {
        title: {
          text: I18n.t("bitcoinTitle")
        },
        series: [
          {
            data: bitcoinData
          }
        ]
      };


    return (
        <div>
            {isLoading=== true ?(
               <div style={{ display: "flex", justifyContent: "center" }}>
                    <CircularProgress />
                </div>
            ): 

             <HighchartsReact
                highcharts={Highcharts}
                constructorType={'stockChart'}
                options={options}
            />
            }
            </div>
    );
}
 
export default HistoricalBitcoinPrice;