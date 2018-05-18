import React, { Component } from "react"
import "./Head.css"

class Head extends Component {
    render() {
        return (
            <div className="Head">
                <div className="HeadLeft">
                    <img src={require("../../../public/logo.png")} />
                    <h3>设计管理系统</h3>
                </div>
                <div className="HeadCenter">
                    <input type="text" placeholder="搜搜关键字、联系人、资料" />
                </div>
                <div className="HeadRight">
                    <img src={require("../../../public/user.gif")} />
                    <p>
                        用户:
                    {
                            JSON.parse(window.sessionStorage.getItem("msg")).user
                        }
                        &nbsp;▼
                    </p>
                </div>
            </div>
        )
    }
}

export default Head