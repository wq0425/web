import {combineReducers} from 'redux'
import Me from './Me'
import Mine from './Mine'
import Home from './Home'
import Car from './Car'

const reducers = combineReducers({
    Me,
    Mine,
    Home,
    Car
})


export default reducers