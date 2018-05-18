import React, { Component } from "react"
import "./Fls.css"
import { Route, NavLink, Redirect, BrowserRouter, Switch } from "react-router-dom"
import { connect } from "react-redux"

class Fls extends Component {
    constructor() {
        super()
    }
    ppClick(carClass) {
        this.props.changeNav(carClass)
    }
    down() {
        this.props.changeNav("down")
    }
    top() {
        this.props.changeNav("top")
    }
    render() {
        let Fl;
        if (this.props.title) {
            switch (this.props.title) {
                case "px":
                    Fl = (<div className='px'>
                        <span onClick={this.down.bind(this)}>价格由低到高</span>
                        <span onClick={this.top.bind(this)}>价格由高到低</span>
                    </div>)
                    break;
                case "pp":
                    Fl = (<div className='pp'>
                        {
                            this.props.data.map((v, i) => {
                                return <div key={i}>
                                    {
                                        v.map((val, ind) => {
                                            return <span key={ind} onClick={() => { this.ppClick(val.carClass) }}>{val.carClass}</span>
                                        })
                                    }
                                </div>
                            })
                        }
                    </div>)
                    break;
                case "jg":
                    Fl = (<div className='jg'>
                        <span>jg</span>
                    </div>)
                    break;
                case "sx":
                    Fl = (<div className='sx'>
                        <span>sx</span>
                    </div>)
                    break;
                default:
                    Fl = (<div className='px'>
                        <span>价格由低到高</span>
                        <span>价格由高到低</span>
                    </div>);
                    break;
            }
        }
        return (
            <div className="Fls" style={this.props.style}>
                {Fl}
            </div>
        )
    }
}

const state = (state) => {
    return {
        data: state.car
    }
}

export default connect(state)(Fls)