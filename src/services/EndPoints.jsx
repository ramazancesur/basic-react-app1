import * as request from './functions'

const bitcoinHistoricData= "https://production.api.coindesk.com/v2/price/values/BTC?start_date=2010-07-17T21:00&end_date=2020-09-16T09:24&ohlc=false"

export const fetchBitcoinHistoricalData= ()=> {
    return request.callAxiosWithFullUrl({url:bitcoinHistoricData})
}