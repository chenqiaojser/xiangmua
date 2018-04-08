import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css";
import axios from "axios";
class Register extends React.Component{
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
	<div id="navL">
		<a href="#/login" ><i className="iconfont icon-back"></i></a>
		<h1><a href="#/login"><img src="http://static1.mtime.cn/html5/20180208104315/images/2014/logo_mtime.png"/></a></h1>
	</div>

	<div id="main">

		<form>
			<div>
				<span>手机号:</span>
				<input type="text" name="phone" className="text" placeholder="请输入手机号" ref="phone" />
			</div>
			<div>
				<span>验证码:</span>
				<input type="password" placeholder="密码" />
			</div>
			<div>
				<span>密码:</span>
				<input type="password" name="password" placeholder="6-20位字母、数字、符号组成" ref="password" />
			</div>
			<input type="radio" className="radio" /> 我已阅读并同意<a href="">《Mtime时光网服务条款》</a>
			<button onClick={this.handleClick.bind(this)} type="button">注册</button>
		</form>
	</div>
	    <div id="nav2">
    	<ul>
    		<li>首页</li>
    		<li>购票</li>
    		<li>商城</li>
    		<li>发现</li>
    		<li>我的</li>
    	</ul>
    </div>

    <div id="nav3">
    	<ul>
    		<li><a href="">PC版</a></li>
	    	<li><a href="">客户端下载</a></li>
	    	<li><a href="">意见反馈</a></li>
	    	<li><a href="">帮助中心</a></li>
    	</ul>	
    </div>

    <div id="footer">
    	<p><img src="/static/image/fot_logo.png" /></p>
    	<p>Copyright2006-2018Mtime.com Inc. All rights reserved.</p>
    </div>


     </div>

			)
	}

	handleClick(){
		axios.post('/register',{
			phone:this.refs.phone.value,
			password:this.refs.password.value
		}).then(res=>{
			console.log('11111111');
            this.props.history.push('/login')
		}).catch(error=>{
			console.log(error)
		})
	}
}

export default Register;
