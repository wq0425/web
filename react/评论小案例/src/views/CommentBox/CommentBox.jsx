import React, { Component } from "react"
import CommentForm from "../CommentForm"
import CommentList from "../CommentList"
import $ from "jquery"

class CommentBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
        this.getState()
    }

    getState(){
        $.ajax({
            url: this.props.url,
            success: (data) => {
                this.setState({
                    data: data
                })
            }
        })
    }

    getData(data) {
        const newData = this.state.data.concat(data)
        this.setState({
            data: newData
        })
    }

    render() {
        return (
            <div id="CommentBox">
                <h2>评论</h2>
                <CommentList data={this.state.data} />
                <CommentForm getData={this.getData.bind(this)} />
            </div>
        )
    }
}

export default CommentBox