import React, { Component } from "react"

class CommentLists extends Component {
    render() {
        return (
            <div id="CommentLists">
                <b>{this.props.nam}</b>
                &nbsp;
                <em>{this.props.tim}</em>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default CommentLists