import React from "react"
import ReactDom from "react-dom"
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom"

import Header from "./common/Header"
import Main from "./common/Main"
import Footer from "./common/Footer"
import Footers from "./common/Footer/Footers"

import routers from "./router/router.js"

import "./icon/iconfont.css"
import "./main.css"

ReactDom.render(
    <BrowserRouter>
        <div id="box">
            <Header />

            <Main>
                <Switch>
                    {
                        routers.views.map((view, ind) => {
                            return (
                                <Route
                                    exact
                                    path={view.path}
                                    key={ind}
                                    render={(location) => {
                                        return <view.component routers={view.children}></view.component>
                                    }}>
                                </Route>
                            )
                        })

                    }
                </Switch>

                {/*<Route exact path="/" component={Home}></Route>
                <Route path="/fl" component={Fl}></Route>
                <Route path="/nhj" component={Nhj}></Route>
                <Route path="/gwc" component={Gwc}></Route>
                <Route path="/wd" component={Wd}></Route>*/}
            </Main>

            <Footer>
                {
                    routers.navs.map((nav, ind) => {
                        return (
                            <NavLink
                                to={nav.to}
                                activeClassName={nav.active}
                                key={ind}
                            >
                                <Footers title={nav.title} icon={nav.icon} />
                            </NavLink>
                        )
                    })

                }
                {/*<NavLink to="/" activeClassName="active">首页</NavLink>
                <NavLink to="/fl" activeClassName="active">分类</NavLink>
                <NavLink to="/nhj" activeClassName="active">年货节</NavLink>
                <NavLink to="/gwc" activeClassName="active">购物车</NavLink>
                <NavLink to="/wd" activeClassName="active">我的</NavLink>*/}
            </Footer>
        </div>
    </BrowserRouter>,
    document.getElementById("root")
)