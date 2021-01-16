import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore,combineReducers} from 'redux';
import  counterReducers  from './store/reducers/counter';
import  resultReducers  from './store/reducers/result';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  ctr:counterReducers,
    res:resultReducers
})

const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
