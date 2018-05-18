import React from "react"
import ReactDom from "react-dom"
import CommentBox from "./views/CommentBox"


ReactDom.render(
    <CommentBox url="src/data/data.json" />,
    document.getElementById("root")
)