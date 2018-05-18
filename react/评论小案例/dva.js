import dva, { connect } from "dva"
import React from "react"
import { Router, Route, Switch, NavLink } from "dva/router"
import createHistory from 'history/createBrowserHistory';

const app = dva({
    history: createHistory(),
});

app.model({
    namespace: "count",
    state: {
        name: '李萧',
        age: 18,
        hobby: ["火锅", '烧烤', "大盘鸡"]
    },
    reducers: {
        add: (state) => {
            return Object.assign({}, state, { age: state.age + 1 })
        },
        del: (state) => {
            return Object.assign({}, state, { age: state.age - 1 })
        },
        change: (state, newData) => {
            return Object.assign({}, state, newData.newData)
        }
    }
})

class Home extends React.Component {
    render() {
        return (
            <div id="Home">
                Home
                <p>数字:{this.props.count.age}</p>
                <button onClick={() => { this.props.dispatch({ type: "count/add" }) }}>加</button>
                <button onClick={() => { this.props.dispatch({ type: "count/del" }) }}>减</button>
                <NavLink to="/mine">个人信息</NavLink>
            </div>
        )
    }
}

class Mine extends React.Component {
    changeDisplay() {
        this.refs.aa.style.display = "none"
        this.refs.ab.style.display = "none"
        this.refs.ba.style.display = "block"
        this.refs.bb.style.display = "block"
    }
    goBack() {
        this.quanchange()
    }
    ok() {
        this.quanchange()
        const newData = {
            name: this.refs.i1.value,
            age: this.refs.i2.value,
            hobby: this.refs.i3.value.split(",")
        }
        this.props.dispatch({ type: "count/change", newData: newData })
    }
    quanchange() {
        this.refs.aa.style.display = "block"
        this.refs.ab.style.display = "block"
        this.refs.ba.style.display = "none"
        this.refs.bb.style.display = "none"
    }
    render() {
        return (
            <div id="Mine">
                <div style={{ display: "block" }} ref="aa">
                    {this.props.count.name}今年{this.props.count.age}岁,
                    他喜欢{this.props.count.hobby.map((data) => { return data + "、" })}
                </div>

                <div style={{ display: "none" }} ref="ba">
                    姓名：<input defaultValue={this.props.count.name} ref="i1" />
                    <br />
                    年龄：<input defaultValue={this.props.count.age} ref="i2" />
                    <br />
                    爱好：<input defaultValue={this.props.count.hobby.map((data) => { return data + " " })} ref="i3" />
                </div>

                <button onClick={this.changeDisplay.bind(this)} style={{ display: "block" }} ref="ab">修改个人信息</button>

                <div style={{ display: "none" }} ref="bb">
                    <button onClick={this.goBack.bind(this)}>取消</button>
                    <button onClick={this.ok.bind(this)}>确认</button>
                </div>
            </div>
        )
    }
}

const App = connect(({ count }) => ({ count }))(Home)
const Me = connect(({ count }) => ({ count }))(Mine)

app.router(({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={App}></Route>
                <Route path="/mine" component={Me}></Route>
            </Switch>
        </Router>
    )
})


app.start("#root")