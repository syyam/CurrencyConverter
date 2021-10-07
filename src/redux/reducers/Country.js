import { GET_COUNTRY_LIST_RESQUEST, SET_TEMP_COUNTRY_DATA, GET_CAPITAL, GET_CURRENCY, GET_POPULATION, GET_ALL_COUNTRY_DATA } from '../actions/Country';

const initialState = {
    countries: [],
    capitals: [],
    currencyNames: [],
    population: '',
    countryMap: {},
    tempData: [],
    isLoading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRY_LIST_RESQUEST: {


            const { countriesList, isLoading } = action;

            // console.log(JSON.stringify( countriesList )+ "reducer")
            return {
                ...state, countries: countriesList
            };
        }


        case GET_ALL_COUNTRY_DATA: {


            const { payload, isLoading } = action;

            return {
                ...state, countryMap: payload
            };
        }

        case SET_TEMP_COUNTRY_DATA: {


            const { payload, isLoading } = action;

            return {
                ...state, tempData: payload
            };
        }

        case GET_CAPITAL: {


            const { capitalList, isLoading } = action;

            return {
                ...state, capitals: capitalList
            };
        }

        case GET_POPULATION: {


            const { population, isLoading } = action;

            return {
                ...state, population: population, isLoading
            };
        }

        case GET_CURRENCY: {


            const { currencyList, isLoading } = action;

            return {
                ...state, currencyNames: currencyList
            };
        }
        default:
            return state;
    }
};

export { reducer };