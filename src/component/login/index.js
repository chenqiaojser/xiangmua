import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";
import axios from "axios"

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			phone:null,
			password:null
		}
	}

	render(){
		return(
			<div>
	  <div id="navR"> 
		<a href="#/home" ><i className="iconfont icon-back"></i></a>
		<h1><a href=""><img src="http://static1.mtime.cn/html5/20180208104315/images/2014/logo_mtime.png" /></a></h1>
		
		
	</div>

	<div id="main">
		<form>
			<div>
				<i className="iconfont icon-account"></i>
				<input type="text" className="text" placeholder="登录邮箱/手机号码" ref="phone" name="phone" />
			</div>
			<div>
				<i className="iconfont icon-edit"></i>
				<input type="password" placeholder="密码" ref="password" name="password" />
			</div>
			<button type="button" onClick={this.handleClick.bind(this)}>登录</button>
		</form>
	</div>

	<div id="section1">
		<span><a href="#/register">免费注册</a></span>
		<span>找回密码</span>
		<p>使用第三方登录</p>
	</div>

	<div id="footer">
		<a href=""></a>
		<a href=""></a>
	</div>

</div>

			)
	}

	handleClick(){
		axios.post('/login',{
			phone:this.refs.phone.value,
			password:this.refs.password.value
		}).then(res=>{
			console.log('11111')
			this.props.history.push('/home');
		}).catch(error=>{
			console.log('xxxxxx')
		})
	}
}

export default Login;
