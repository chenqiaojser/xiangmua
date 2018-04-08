import React from "react";
import "./index.css"
import {
  NavLink
} from "react-router-dom";

class Sidebar extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		return <aside>

        <ul>
     <li><NavLink to="/home">home</NavLink></li>
     <li><NavLink to="/film">film</NavLink></li>
     <li><NavLink to="/card">card</NavLink></li>
    </ul>
    </aside>
	}
}


export default Sidebar;