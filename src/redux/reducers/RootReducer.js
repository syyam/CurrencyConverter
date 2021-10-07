import { combineReducers } from 'redux';
import { reducer as currencyReducer } from './Currency';
import { reducer as countryReducer } from './Country';

const reducer = combineReducers({
    currency: currencyReducer,
    country: countryReducer,
});

export { reducer };