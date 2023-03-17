import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';
import thunkMiddleware from "redux-thunk";
import rootReducer from './rootReducer';

// Create New Store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware, logger)))


export default store;