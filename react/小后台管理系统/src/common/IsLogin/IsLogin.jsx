import React, { Component } from "react"
import Home from "../../components/Home"
import List from "../../components/List"

class IsLogin extends Component {
    render() {
        return (
            <div style={{ width: "100%", height: "100%"}}>
                {
                    window.sessionStorage.msg ? <List /> : <Home />
                }
            </div>
        )
    }
}

export default IsLogin