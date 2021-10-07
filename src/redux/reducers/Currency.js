import { GET_CURRENCIES_LIST_RESQUEST } from '../actions/Currency';
import { GET_CURRENCIES_FAILURE } from '../actions/Currency';

const initialState = {
    currencies: [],
    errorMsg: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CURRENCIES_LIST_RESQUEST: {


            const { currenciesList, isLoading } = action;

            return {
                currencies: currenciesList
            };
        }
        case GET_CURRENCIES_FAILURE: {

            const { error } = action;
            return { errorMsg: error.message }
        }
        default:
            return state;
    }
};

export { reducer };