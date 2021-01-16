import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers,applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';

import  counterReducers  from './store/reducers/counter';
import  resultReducers  from './store/reducers/result';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  ctr:counterReducers,
    res:resultReducers
})

const logger = store =>{
    return next => {
        return action => {
            console.log('[Middleware] Dispatching',action);
            const result = next(action);
            console.log('[Middleware] next state',store.getState());
            return result;
        }
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,composeEnhancer(applyMiddleware(logger,thunk)));


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
