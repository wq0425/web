import React, { Component } from "react"
import { BrowserRouter, Route, NavLink, Redirect } from "react-router-dom"
import "./Home.css"
import Homes from "./Homes"

class Home extends Component {
    render() {
        const Homea = this.props.routers.map((route) => {
            return (
                <NavLink to={route.to} activeClassName="active" exact>{route.type}</NavLink>
            )
        })
        return (
            <div id="Home">
                <BrowserRouter>
                    <div>
                        <div className="navs">
                            {Homea}
                        </div>
                        <div>
                            <Redirect from="home/:id" to="/home/dy"></Redirect>
                            <Route path="/home/:id" component={Homes}></Route>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default Home