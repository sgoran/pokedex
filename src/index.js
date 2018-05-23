import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter> 
        </Provider>
  ), document.getElementById('root'));
  
registerServiceWorker();
  