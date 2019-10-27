import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import StoreTable from 'antd/lib/table/Table';
import newArt from './reducers/newArt';

export default createStore(
combineReducers({
    newArt
}),
applyMiddleware(promiseMiddleware)
)
