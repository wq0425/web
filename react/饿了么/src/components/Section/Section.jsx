import React, { Component } from "react"
import { Route } from "react-router-dom"
import "./Section.css"

class Section extends Component {
    render() {
        return (
            <div id="Section">
                {
                    this.props.views.map((route, ind) => {
                        return (
                            <Route
                                path={route.path}
                                key={ind}
                                component={route.component}
                                exact>
                            </Route>
                        )
                    })
                }
            </div>
        )
    }
}

export default Section