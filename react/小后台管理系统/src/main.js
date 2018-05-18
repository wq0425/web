import React from "react"
import ReactDom from "react-dom"
import IsLogin from "./common/IsLogin"
import { Provider } from "react-redux"
import store from "./store"
import "./main.css"

ReactDom.render(
    <Provider store={store}>
        <IsLogin />
    </Provider>
    ,
    document.getElementById("root")
)