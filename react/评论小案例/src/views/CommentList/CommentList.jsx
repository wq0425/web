import React, { Component } from "react"
import CommentLists from "./CommentLists.jsx"

class CommentList extends Component {

    render() {
        
        const CommentListss = this.props.data.map((data) => {
            return (
                <CommentLists nam={data.nam} text={data.text} tim={data.tim}></CommentLists>
            )
        })

        return (
            <div id="CommentList">
                {CommentListss}
            </div>
        )
    }
}

export default CommentList