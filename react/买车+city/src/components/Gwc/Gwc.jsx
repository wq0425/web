import React, { Component } from "react"
import "./Gwc.css"

class Gwc extends Component {
    submit(e) {
        console.log(e)
    }
    render() {
        return (
            <div id="Gwc">
                <div className="head">
                    <span>购物车</span>
                </div>
                购物车
            </div>
        )
    }
}

export default Gwc