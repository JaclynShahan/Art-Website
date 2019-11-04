import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import StoreTable from 'antd/lib/table/Table';
import newArt from './reducers/newArt';
import login from './reducers/login';
import contact from './reducers/contact';

export default createStore(
combineReducers({
    newArt,
    login,
    contact

}),
applyMiddleware(promiseMiddleware)
)
