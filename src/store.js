import { createStore } from 'redux'
import reducers from './reducers'

// drugi argumenta moze biti initial satte
const store = createStore(reducers);