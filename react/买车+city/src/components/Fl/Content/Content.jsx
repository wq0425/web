import React, { Component } from "react"
import "./Content.css"
import { Route, NavLink, Redirect, BrowserRouter, Switch } from "react-router-dom"
import { connect } from "react-redux"
import axios from "axios"

class Content extends Component {
    constructor() {
        super()
        this.state = {
            arr: [],
            data: [],
            id: ""
        }
    }
    componentDidMount() {
        axios.get("/api/car").then((data) => {
            this.props.getData(data.data)

            let arr = []
            data.data.forEach((v, i) => {
                v.forEach((val, ind) => {
                    val.carList.forEach((a, b) => {
                        if (a.carName && a.price) {
                            arr.push(a)
                        }
                    })
                })
            })
            this.state.arr = arr
            this.setState({ data: arr })
        })
    }
    componentWillReceiveProps(props) {
        this.state.id = props.id
        if (this.state.id) {
            if (this.state.id == 'down') {
                this.state.data.sort((a, b) => {
                    return a.price.split("-")[0] - b.price.split("-")[0]
                })
                this.setState({ data: this.state.data })
            }
            else if (this.state.id == 'top') {
                this.state.data.sort((a, b) => {
                    return b.price.split("-")[0] - a.price.split("-")[0]
                })
                this.setState({ data: this.state.data })
            }
            else {
                this.props.data.forEach((v, i) => {
                    v.forEach((val, ind) => {
                        if (val.carClass == this.state.id) {
                            this.setState({ data: val.carList })
                        }
                    })
                })
            }
        }
        else {
            this.setState({ data: this.state.arr })
        }
    }
    render() {
        let { data, id } = this.state
        return (
            <div className="Content">
                {
                    data.map((v, i) => {
                        return <div key={i}>
                            {
                                v.price && v.carName ? <a>
                                    <b>{v.carName}</b>
                                    <span>{v.price}</span>
                                </a> : null
                            }
                        </div>
                    })
                }
            </div>
        )
    }
}

const state = (state) => {
    return {
        data: state.car
    }
}

const action = (dispatch) => {
    return {
        getData: (data) => {
            dispatch({
                type: "getCarData",
                data: data
            })
        }
    }
}

export default connect(state, action)(Content)