import React, { Component } from "react"

class CommentForm extends Component {

    giveData() {

        if(this.refs.nam.value == "" || this.refs.text.value == ""){
            alert("请输入！")
        }
        else{
            const data = {
                nam: this.refs.nam.value,
                text: this.refs.text.value,
                tim: "刚刚"
            }
            this.props.getData(data)
        }
        
        this.refs.nam.value = ""
        this.refs.text.value = ""

    }

    render() {
        return (
            <div id="CommentForm">
                <input type="text" placeholder="请输入姓名" ref="nam" />
                <br />
                <textarea cols="30" rows="10" placeholder="请输入评论" ref="text"  ></textarea>
                <br />
                <button type="submit" onClick={this.giveData.bind(this)}>提交</button>
            </div>
        )
    }
}

export default CommentForm