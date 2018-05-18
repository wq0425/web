import React, { Component } from "react"
import { connect } from "react-redux"
import "./Header.css"

class Header extends Component {
    componentDidMount() {
        this.props.dispatch({ type: "header", title: "首页" })
    }
    render() {
        const { title } = this.props
        return (
            <div id="Header">
                {
                    title.title == '首页'
                        ? <div className="home"><i className="iconfont icon-weizhi"></i>北京市天安门旁边别墅250号</div>
                        : <div className="other">{title.title}</div>
                }
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        title: state.home
    }
}

export default connect(mapStateToProps)(Header)