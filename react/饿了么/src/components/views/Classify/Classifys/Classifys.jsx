import React from "react"
import { NavLink, Route, BrowserRouter, Redirect } from "react-router-dom"
import mine from "../../Mine"
import "./Classifys.css"

class Classifys extends React.Component {
    render() {
        const data = [
            {
                img: "https://fuss10.elemecdn.com/8/a1/f277b7ce58002ac85876662d39c4cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                title: "汉堡王全家桶",
                price: "188"
            },
            {
                img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1556974734,4224065130&fm=27&gp=0.jpg",
                title: "大盘菜",
                price: "166"
            },
            {
                img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3353359085,277015106&fm=27&gp=0.jpg",
                title: "火山泥",
                price: "144"
            }, {
                img: "https://fuss10.elemecdn.com/8/a1/f277b7ce58002ac85876662d39c4cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                title: "汉堡王全家桶",
                price: "188"
            },
            {
                img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1556974734,4224065130&fm=27&gp=0.jpg",
                title: "大盘菜",
                price: "166"
            },
            {
                img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3353359085,277015106&fm=27&gp=0.jpg",
                title: "火山泥",
                price: "144"
            }, {
                img: "https://fuss10.elemecdn.com/8/a1/f277b7ce58002ac85876662d39c4cjpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/",
                title: "汉堡王全家桶",
                price: "188"
            },
            {
                img: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1556974734,4224065130&fm=27&gp=0.jpg",
                title: "大盘菜",
                price: "166"
            },
            {
                img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3353359085,277015106&fm=27&gp=0.jpg",
                title: "火山泥",
                price: "144"
            },
        ]
        const arr = []
        for (var i = 0; i < this.props.count; i++) {
            arr[i] = data[i]
        }
        return (
            <div>
                {
                    arr.map((da, ind) => {
                        return (
                            <div className="lists">
                                <img src={da.img} />
                                <p>
                                    <b>{da.title}</b>
                                    <span>{da.price}元</span>
                                </p>
                            </div>
                        )

                    })
                }
            </div>
        )
    }
}

export default Classifys