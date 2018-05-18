import React, { Component } from "react"
import axios from "axios"
import "./Home.css"

class Home extends Component {
    componentDidMount() {
        axios.get("/api/data")
            .then(function (res) {
                console.log(res.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div id="Home">
                <p>
                    <input type="text" placeholder="搜索饿了么商家、商品名称" />
                </p>
                <img src="//fuss10.elemecdn.com/e/22/891aa1898e598f3051017ae1c9bd5png.png?imageMogr/format/webp/" alt="" />
            </div>
        )
    }
}

export default Home