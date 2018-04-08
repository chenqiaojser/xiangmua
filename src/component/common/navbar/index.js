import React from "react";
import "./index.css"

class Navbar extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return (<nav>
		<div className="left">
		   <span>卖座电影</span>
		</div>

		<div className="right">
		   <span>大连</span>
		</div>
 
		</nav>)
	}
}


export default Navbar;