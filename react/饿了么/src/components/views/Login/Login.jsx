import React from "react"
import "./Login.css"

class Login extends React.Component {
    keyup() {
        const reg = /^1[34578]\d{9}$/
        this.refs.phone.value = this.refs.phone.value.replace(/[^\d]/g, '')
    }
    load() {
        let user = {
            phone: this.refs.phone.value,
            yzm: this.refs.yzm.value,
        }
        console.log(user)
    }
    render() {
        return (
            <div id="Login">
                <h2>检测到你未登录，请登录!!!</h2>
                <p>手机号: <input type="text" placeholder="本人手机号(请输入数字)" onKeyUp={this.keyup.bind(this)} ref="phone" /></p>
                <p>验证码: <input type="password" placeholder="请输入验证码" ref="yzm" /><span>发送验证码</span></p>
                <p><em>如果没有注册过的话，登录直接帮您注册！</em></p>
                <p>
                    <button onClick={this.load.bind(this)}>登录</button>
                </p>
            </div>
        )
    }
}

export default Login