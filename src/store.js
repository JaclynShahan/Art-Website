import {createStore, applyMiddleware, combineReducers} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import StoreTable from 'antd/lib/table/Table';

export default createStore(
combineReducers({

}),
applyMiddleware(promiseMiddleware)
)
