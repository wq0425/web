import React, { Component } from "react"
import "./Footers.css"

class Footers extends Component {
    render() {
        const { icon, title } = this.props
        return (
            <div>
                <i className={icon}></i>
                <p>{title}</p>
            </div>
        )
    }
}

export default Footers