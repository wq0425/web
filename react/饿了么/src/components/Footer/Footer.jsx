import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import "./Footer.css"

class Footer extends Component {
    changeHead(title) {
        this.props.dispatch({ type: "footer", title: title })
    }
    render() {
        return (
            <div id="Footer">
                {
                    this.props.navs.map((route, ind) => {
                        return (
                            <NavLink to={route.to} key={ind} exact activeClassName="active">
                                <div className="footers" onClick={this.changeHead.bind(this, route.title)}>
                                    <i class={route.icon}></i>
                                    <span>{route.title}</span>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        title: state
    }
}

export default connect(mapStateToProps)(Footer)