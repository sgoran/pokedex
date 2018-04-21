import { 
    createStore, 
    applyMiddleware  
} from 'redux';

import thunkMiddleware from 'redux-thunk';

// import { 
//     createLogger 
// } from 'redux-logger';

import reducers from './reducers';

//const loggerMiddleware = createLogger();

const store = createStore(
    reducers,
    applyMiddleware(
        thunkMiddleware,
        //loggerMiddleware 
    )
);

export default store;