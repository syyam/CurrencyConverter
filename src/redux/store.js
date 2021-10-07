import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/RootReducer';
import ReduxThunk from 'redux-thunk'


const store = createStore(reducer, applyMiddleware(ReduxThunk));

export { store };