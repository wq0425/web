import React, { Component } from "react"
import "./Fl.css"
import axios from "axios"
import { Route, NavLink, Redirect, BrowserRouter, Switch } from "react-router-dom"
import Fls from "./Fls"
import Content from "./Content"

class Fl extends Component {
    constructor() {
        super()
        this.state = {
            nav: [
                { type: "排序", flag: false, title: "px", class: "" },
                { type: "品牌", flag: false, title: "pp", class: "" },
                { type: "价格", flag: false, title: "jg", class: "" },
                { type: "筛选", flag: false, title: "sx", class: "" }
            ],
            title: "",
            style: { display: "none" },
            id: ''
        }
    }
    navClick(e, type, title, flag) {
        this.setState({ id: '' })
        this.setState({ title: title })
        let nav = []
        this.state.nav.forEach((v, i) => {
            if (v.type == type) {
                v.flag = !v.flag
            }
            else {
                v.flag = false
            }
            nav.push(v)
        })
        this.setState({ nav: nav })

        !flag ? this.setState({ style: { display: "block" } }) : this.setState({ style: { display: "none" } })
    }
    changeNav(id) {
        this.setState({
            nav: [
                { type: "排序", flag: false, title: "px", class: "" },
                { type: "品牌", flag: false, title: "pp", class: "" },
                { type: "价格", flag: false, title: "jg", class: "" },
                { type: "筛选", flag: false, title: "sx", class: "" }
            ]
        })
        this.setState({ style: { display: "none" } })
        this.setState({ id: id })
    }
    render() {
        let { nav, title, style, id } = this.state
        return (
            <BrowserRouter>
                <div id="Fl">
                    <div className="head">
                        <span>汽车分类</span>
                    </div>
                    <div className="nav">
                        {
                            nav.map((v, i) => {
                                return (
                                    <a onClick={(e) => { this.navClick(e, v.type, v.title, v.flag) }} key={i} className={v.flag ? v.class = "active" : v.class = ""}>
                                        {v.type}
                                        {v.flag ? "▲" : "▼"}
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="Flbox">
                        <Fls title={title} style={style} changeNav={this.changeNav.bind(this)} />
                        <Content id={id} />
                    </div>
                </div>
            </BrowserRouter >
        )
    }
}


export default Fl