import CounterReducer from './Counter'
import AuthReducer from './Auth'

import { combineReducers } from 'redux'
import AuthReduser from './Auth'


const allReducer = combineReducers({
    counter: CounterReducer,
    auth: AuthReduser
})

export default allReducer