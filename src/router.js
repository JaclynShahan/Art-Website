import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/LoginComponents/Login'
import Cart from './components/CartComponents/Cart'
import Home from './components/HomeComponents/Home'

export default (
  <Provider store={store}>
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/cart' component={Cart} />
      <Route exact path='/' component={Home} />
    </Switch>
  </Provider>
)
