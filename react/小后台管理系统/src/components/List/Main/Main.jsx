import React, { Component } from "react"
import routes from "../../../route/route.js"
import { BrowserRouter, Route, NavLink } from "react-router-dom"
import "./Main.css"

class Main extends Component {
    render() {
        const { navs, views } = routes
        return (
            <BrowserRouter>
                <div className="Main">
                    <div className="MainLeft">
                        {
                            navs.map((nav, ind) => {
                                return (
                                    <NavLink
                                        to={nav.to}
                                        key={ind}
                                        activeClassName="active"
                                        exact>
                                        {nav.title}<b>></b>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="MainRight">
                        {
                            views.map((view, ind) => {
                                return (
                                    <div>
                                        <Route
                                            path={view.path}
                                            component={view.component}
                                            key={ind}
                                            exact
                                        >
                                        </Route>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

export default Main