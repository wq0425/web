import React, { Component } from "react"
import "./Home.css"

class Home extends Component {
    login() {
        let message = {
            user: this.refs.user.value,
            pasw: this.refs.pasw.value
        }
        if (this.refs.user.value != "" && this.refs.pasw.value != "") {
            window.sessionStorage.setItem("msg",JSON.stringify(message))
            location.reload()
        }
        else {
            alert("请输入!!!")
        }
    }
    render() {
        return (
            <div id="Home">
                <img src={require("../../public/home.png")} className="bg" />
                <div className="HomeLogin">
                    <img src={require("../../public/logo.png")} />
                    <p>
                        <input type="text" placeholder="请输入用户名" ref="user" />
                    </p>
                    <p>
                        <input type="password" placeholder="请输入密码" ref="pasw" />
                    </p>
                    <button onClick={this.login.bind(this)}>登录</button>
                    <br />
                    <b>登录即注册</b>
                </div>
            </div>
        )
    }
}

export default Home