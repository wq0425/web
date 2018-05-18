import React, { Component } from "react"
import Login from "../Login"
import "./Mine.css"

class Mine extends Component {
    render() {
        return (
            <div id="Mine">
                {
                    window.localStorage.isLogin == "1" ? "登录完成" : <Login />
                }
            </div>
        )
    }
}

export default Mine