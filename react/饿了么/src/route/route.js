import Home from "../components/views/Home"
import Classify from "../components/views/Classify"
import Order from "../components/views/Order"
import Mine from "../components/views/Mine"
import Message from "../components/views/Message"


let routes = {
    views: [
        { title: "首页", path: "/", component: Home },
        { title: "分类", path: "/classify", component: Classify },
        { title: "消息", path: "/message", component: Message },
        { title: "订单", path: "/order", component: Order },
        { title: "我的", path: "/mine", component: Mine }
    ],
    navs: [
        { title: "首页", to: "/", icon: "iconfont icon-shouye" },
        { title: "分类", to: "/classify", icon: "iconfont icon-fenlei" },
        { title: "消息", to: "/message", icon: "iconfont icon-xiaoxi" },
        { title: "订单", to: "/order", icon: "iconfont icon-dingdan" },
        { title: "我的", to: "/mine", icon: "iconfont icon-wode" }
    ]
}

export default routes