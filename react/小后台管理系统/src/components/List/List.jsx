import React, { Component } from "react"
import "./List.css"
import Head from "./Head"
import Main from "./Main"

class List extends Component {
    render() {
        return (
            <div id="List">
                <Head />
                <Main />
            </div>
        )
    }
}

export default List