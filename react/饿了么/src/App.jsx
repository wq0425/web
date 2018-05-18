import React, { Component } from "react"
import { Switch } from "react-router-dom"
import "./App.css"
import "./icon/iconfont.css"
import routes from "./route/route.js"

import Header from "./components/Header"
import Section from "./components/Section"
import Footer from "./components/Footer"



class App extends Component {
    render() {
        return (
            <div id="App">
                <Header />
                <Section views={routes.views} />
                <Footer navs={routes.navs} />
            </div>

        )
    }
}

export default App