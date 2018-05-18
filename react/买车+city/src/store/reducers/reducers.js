import {
    combineReducers
} from "redux"
import city from "./city"
import topCity from "./topCity"
import car from "./car"

let reducers = combineReducers({
    city,
    topCity,
    car,
})

export default reducers