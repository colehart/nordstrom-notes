import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import App from './components/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const provider = (
  <Provider store={ store } >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(provider, document.getElementById('root'));
