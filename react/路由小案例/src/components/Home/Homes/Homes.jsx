import React, { Component } from "react"
import "./Homes.css"

class Homes extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id="Homes">
                {this.props.match.params.id}
            </div>
        )
    }
}

export default Homes