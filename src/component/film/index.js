import React from "react";
import {NavLink} from "react-router-dom";
import "./index.css"

class Film extends React.Component{
	constructor(props){
		super(props);
	}

	render(){ 
		return (<div>  


	     <div className="parent">
			<div className="left"><a href="#/home"><i className="iconfont icon-back"></i></a></div>
			<div className="right">
			   <ul>
			    <li><NavLink to="/film/nowplaying"  activeClass="active">正在热映</NavLink></li>
			    <li><NavLink to="/film/comingsoon"  activeClass="active">即将上映</NavLink></li>
			  
		       </ul>
		   </div>

		 
		  </div>
          {this.props.children}
		</div>)
	}
}


export default Film;