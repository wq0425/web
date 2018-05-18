import Home from "../components/Home"
import Wd from "../components/Wd"
import Gwc from "../components/Gwc"
import Nhj from "../components/Nhj"
import Fl from "../components/Fl"

const routers = {
    navs: [
        {
            title: "首页",
            to: "/",
            icon: "iconfont  icon-shouye"
        },
        {
            title: "分类",
            to: "/fl",
            icon: "iconfont  icon-icon"
        },
        {
            title: "年货节",
            to: "/nhj",
            icon: "iconfont  icon-huowu"
        },
        {
            title: "购物车",
            to: "/gwc",
            icon: "iconfont  icon-gouwuche01"
        },
        {
            title: "我的",
            to: "/wd",
            icon: "iconfont  icon-wode"
        },
    ],
    views: [
        {
            path: "/",
            component: Home,
            children: [
                { to: "/home/dy", type: "电影" },
                { to: "/home/ms", type: "美食" },
                { to: "/home/jp", type: "机票" },
                { to: "/home/cs", type: "超市" },
                { to: "/home/jy", type: "交友" },
                { to: "/home/jd", type: "酒店" },
                { to: "/home/lx", type: "旅行" },
                { to: "/home/zf", type: "租房" }
            ]
        },
        {
            path: "/fl",
            component: Fl
        },
        {
            path: "/gwc",
            component: Gwc
        },
        {
            path: "/nhj",
            component: Nhj
        },
        {
            path: "/wd",
            component: Wd
        },
    ]
}
export default routers