import React, { Component } from "react"
import { connect } from "react-redux"
import "./Work.css"
import data from "../../../../data/data.js"


class Work extends Component {
    render() {
        return (
            <div className="Work">
                <div className="workTable">
                    <ul>
                        <li>序号</li><li>项目名称</li><li>子系统</li><li>设计任务</li><li>跟踪工时</li><li>剩余工时</li><li style={{ flex: 2 }}>完成进度</li>
                        <li>任务状态</li><li>操作</li>
                    </ul>
                    {
                        data.map((data, ind) => {
                            return (
                                <ul>
                                    <li>{ind + 1}</li><li>{data.nam}</li><li>{data.child}</li><li>{data.renwu}</li><li>{data.time1}</li>
                                    <li>{data.time2}</li>
                                    <li style={{ flex: 2 }}>
                                        <span style={{ width: data.jindu + "px", background: data.jindu >= 50 ? "blue" : "orange" }}></span>
                                        &nbsp;{data.jindu}%
                                    </li>
                                    <li style={{ color: data.jindu == 100 ? "blue" : "#000" }}>
                                        {data.jindu == 100 ? "完成" : "未完成"}
                                    </li>
                                    <li>
                                        完成 | 延期
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Work