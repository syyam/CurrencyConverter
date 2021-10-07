export const GET_COUNTRY_LIST_RESQUEST = "GET_COUNTRY_LIST_RESQUEST";
export const GET_CAPITAL = "GET_CAPITAL";
export const GET_CURRENCY = "GET_CURRENCY";
export const GET_POPULATION = "GET_POPULATION";
export const GET_ALL_COUNTRY_DATA = "GET_ALL_COUNTRY_DATA";
export const SET_TEMP_COUNTRY_DATA = "SET_TEMP_COUNTRY_DATA";



import { Config } from '../../config/Api';
import axios from 'axios'

const { COUNTRY_BASE_API_URL, COUNTRY_ACCESS_KEY, CURRENCY_URL, CAPITAL_URL, POPULATION_URL } = Config


export const getCountriesList = (baseCountry) => {

    return dispatch => {

        axios.get(`${COUNTRY_BASE_API_URL}${baseCountry}${COUNTRY_ACCESS_KEY}`)
            .then(res => {

                const response = res.data;
                const payload = { ...response }
                dispatch({
                    type: GET_COUNTRY_LIST_RESQUEST,
                    countriesList: payload
                });
            }).catch((error) => console.log(error))
    };
};

export const updateCountryMap = (countryMap) => {

    return dispatch => {
        dispatch({
            type: GET_ALL_COUNTRY_DATA,
            payload: countryMap
        })

    };
};

export const setTempCountryArr = (countryMap) => {

    return dispatch => {
        dispatch({
            type: SET_TEMP_COUNTRY_DATA,
            payload: countryMap
        })

    };
};

export const getCapital = () => {

    return dispatch => {

        axios.get(`${CAPITAL_URL}`)
            .then(res => {
                const response = res.data;
                const payload = { ...response }

                dispatch({
                    type: GET_CAPITAL,
                    capitalList: payload
                });
            }).catch((error) => console.log(error))
    };
};

export const getPopulation = (countryName) => {


    return dispatch => {

        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://world-population.p.rapidapi.com/population',
            params: { country_name: countryName },
            headers: {
                'x-rapidapi-host': 'world-population.p.rapidapi.com',
                'x-rapidapi-key': 'fa934ab2f5msh8c2d64081a4bad1p1dc922jsn0089acf339ec'
            }
        };

        axios.request(options).then(res => {
            const response = res.data;
            const payload = { ...response }

            console.error(JSON.stringify(payload) + "success");
            dispatch({
                type: GET_POPULATION,
                population: payload,
                isLoading: false
            });
        }).catch(function (error) {
            console.error(error + "world population");
        });


    };
};


export const getCurrencyNames = () => {

    return dispatch => {

        axios.get(`${CURRENCY_URL}`)
            .then(res => {
                const response = res.data;
                const payload = { ...response }

                dispatch({
                    type: GET_CURRENCY,
                    currencyList: payload
                });
            }).catch((error) => console.log(error))
    };
};
