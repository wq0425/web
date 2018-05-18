import React, { Component } from "react"
import { NavLink, Route, BrowserRouter, Redirect } from "react-router-dom"
import Classifys from "./Classifys"
import "./Classify.css"

class Classify extends Component {
    changeArr(count) {
        this.setState({
            count: count
        })
    }
    render() {
        const data = [
            { to: "/classify/ms", count: "4", type: "美食", img: "//fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/wc", count: "6", type: "晚餐", img: "//fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/sc", count: "7", type: "商超便利", img: "//fuss10.elemecdn.com/c/3c/0184f5b3fa72f295fc01864734218jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/gs", count: "3", type: "果蔬生鲜", img: "//fuss10.elemecdn.com/c/db/d20d49e5029281b9b73db1c5ec6f9jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/yy", count: "2", type: "医药健康", img: "//fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/dp", count: "8", type: "大牌5折", img: "//fuss10.elemecdn.com/a/7b/b02bd836411c016935d258b300cfejpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/lm", count: "5", type: "浪漫鲜花", img: "//fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/mlt", count: "4", type: "麻辣烫", img: "//fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/df", count: "6", type: "地方菜系", img: "//fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/ps", count: "3", type: "披萨意面", img: "//fuss10.elemecdn.com/7/b6/235761e50d391445f021922b71789jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" },
            { to: "/classify/xc", count: "7", type: "地方小吃", img: "//fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" }
        ]
        return (
            < BrowserRouter >
                <div id="Classify">
                    <div className="ClassifyLeft">
                        {
                            data.map((data, ind) => {
                                return (
                                    <NavLink to={data.to} exact activeClassName="active" onClick={this.changeArr.bind(this, data.count)}>
                                        <img src={data.img} />
                                        <li>{data.type}</li>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                    <div className="ClassifyRight">
                        <Redirect from="classify/:id" to="/classify/ms"></Redirect>
                        <Route
                            path="/classify/:id"
                            exact
                            render={(location) => {
                                let count = this.state ? this.state : { count: "4" }
                                return <Classifys count={count.count}></Classifys>
                            }}>
                        </Route>
                    </div>
                </div>
            </BrowserRouter >

        )
    }

}

export default Classify