import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios'

class Me extends Component {
	constructor(a){
		super(a)
		this.state={
			count:0,
			price:0,
			flag:false
		}
	}
	componentDidMount(){
		axios.get('/api/list').then((res)=>{
			this.props.datalist(res.data)
		})
	}
	add(ind){
		this.setState({flag:true})
		this.props.add(ind,this.props.data)
		let c = 0,p=0
		this.props.data.forEach((v,i) => {
			if(v.flag){
				c += v.count
				p += v.count * v.price
			}
		})
		this.setState({count:c,price:p})
	}
	jian(ind){
		this.props.jian(ind,this.props.data)
		let c = 0,p=0
		this.props.data.forEach((v,i) => {
			if(v.flag){
				c += v.count
				p += v.count * v.price
			}
		})
		this.setState({count:c,price:p})
	}
	danji(ind){
		this.props.danji(ind,this.props.data)
		let c = 0,p=0
		this.props.data.forEach((v,i) => {
			if(v.flag){
				c += v.count
				p += v.count * v.price
			}
		})
		this.setState({count:c,price:p})
	}
	render(){
		let {count,price}=this.state
		return(
			<div>
				{
					this.props.data.map((item,index)=>{
						return (
							<div key={index}>
								<div className='aa'>
									<div className="ff">
										<input type="checkbox" ref={'danji'+index} onClick={()=>{this.danji(index)}} className="f1" defaultChecked={this.state.flag} checked={item.flag}/>
									</div>
									<div className="bb">{item.title}</div>
									<div className="cc">
										<img src={item.src} alt="" />
									</div>
									<div  className="dd">{item.price}</div>
									<div className="ee">
										<button className="e1" onClick={()=>{this.jian(index)}}>-</button>
										<input type="text" ref={'ipt'+index} className="e3" value={item.count}/>
										<button className="e2" onClick={()=>{this.add(index)}}>+</button>
									</div>
								</div>	
								
							</div>
						)
					})
				}
				<div className='foot'>
					<input type="checkbox" className="f2" defaultChecked={this.state.flag} onClick={()=>{this.flag()}}/>
					<div className='d1'>
					总数量：<span>{count}</span>
					</div>
					<div className='d1'>
					总价：<span>{price}</span>
					</div>
				</div>
			</div>
		)
	}
}
const mapStateToProps=(state)=>{
	return {
		data:state.Me
	}
}
const action=(dispatch)=>{
	return {
		datalist:(data) => {
			dispatch({
				type:"data",
				data:data
			})
		},
		add:(ind,data) => {
			dispatch({
				type:"add",
				ind:ind,
				data:data
			})
		},
		jian:(ind,data) => {
			dispatch({
				type:"jian",
				ind:ind,
				data:data
			})
		},
		danji:(ind,data) => {
			dispatch({
				type:"danji",
				ind:ind,
				data:data
			})
		}
	}
}
export default connect(mapStateToProps,action)(Me)
