import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app'
import{createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducer/rootreducer'
import {Provider} from "react-redux"
import './style/index';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

var store=createStore(rootReducer,applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <Switch>
      <Route exact path="/" component={App}/>
      {/* <Route/> */}
  </Switch>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.con')
);


 


