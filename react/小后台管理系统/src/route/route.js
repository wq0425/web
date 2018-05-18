import React from "react"
import Work from "../components/List/Main/Work"
import Home from "../components/List/Main/Home"
import Gl from "../components/List/Main/Gl"
import Jdgl from "../components/List/Main/Jdgl"
import Set from "../components/List/Main/Set"

let routes = {
    navs: [
        { to: "/", title: "首页" },
        { to: "/work", title: "工作台" },
        { to: "/jdgl", title: "阶段管理" },
        { to: "/gl", title: "管理" },
        { to: "/set", title: "设置" }
    ],
    views: [
        { path: "/", component: Home },
        { path: "/work", component: Work },
        { path: "/jdgl", component: Jdgl },
        { path: "/gl", component: Gl },
        { path: "/set", component: Set }
    ]
}

export default routes