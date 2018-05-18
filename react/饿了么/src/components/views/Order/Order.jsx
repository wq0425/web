import React, { Component } from "react"
import Login from "../Login"
import "./Order.css"

class Order extends Component {
    render() {
        return (
            <div id="Order">
                {
                    window.localStorage.isLogin == "1" ? "登录完成" : <Login />
                }
            </div>
        )
    }
}

export default Order