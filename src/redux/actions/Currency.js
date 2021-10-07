export const GET_CURRENCIES_LIST_RESQUEST = "GET_CURRENCIES_LIST_RESQUEST";
export const GET_CURRENCIES_FAILURE = "GET_CURRENCIES_FAILURE";

import { Config } from '../../config/Api';
import axios from 'axios'

const { FIXER_BASE_API_URL, FIXER_ACCESS_KEY } = Config


export const getCurrenciesList = (baseCurrency) => {

    return dispatch => {

        axios.get(`${FIXER_BASE_API_URL}${FIXER_ACCESS_KEY}`)
            .then(res => {

                const response = res.data;
                const payload = { ...response, baseCurrency }

                
                dispatch({
                    type: GET_CURRENCIES_LIST_RESQUEST,
                    currenciesList: payload
                });
            }).catch(error => {
                console.log(error)
                dispatch({ type: 'GET_CURRENCIES_FAILURE', error: error })
            })
    };
};
