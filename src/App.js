import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  NavLink
} from "react-router-dom";
import Navbar from "./component/common/navbar"
import Sidebar from "./component/common/sidebar"

class App extends Component {
  render() {
    return (
      <div className="App">
      
      
    
         {this.props.children}
        
      </div>
    );
  }

  /*componentDidMount(){
    fetch("/v4/api/billboard/home?__t=1522237830316").then(res=>res.json()).then(res=>{
      console.log(res)
    })
}*/
}
export default App;
