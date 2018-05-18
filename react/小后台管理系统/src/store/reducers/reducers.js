import { combinReducers } from "redux"
import work from "./work"

let reducers = combinReducers({
    work
})

export default reducers