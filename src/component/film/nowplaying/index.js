import React from "react";
import "./index.css"
import axios from "axios"

class Nowplaying extends React.Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[]
		}
	}

	render(){
		return (<div>
		<div id="nav">
          <span>北京</span> 
	  	  <i className="iconfont icon-moreunfold"></i>
          <i className="iconfont icon-search"></i>
	  	  <input type="placeholder" value="影片/影院/影人,任你搜" />
		</div> 

		<div id="body">
	    <ul>
	    { this.state.datalist.map(item=>
	     <li key={item.id} onClick={this.handleclick.bind(this,item.id)}>
		     <div className="first"><img src={item.img} /></div>
		     <div className="second">
		     <h3>{item.t}<span>{(item.r==-1)?null:item.r}</span></h3>
		     <h4>{item.commonSpecial}</h4>
		     <h5><span>3D</span><span>中国巨幕</span></h5>
		     <h6>{item.NearestCinemaCount
	    
}家影院上映{item.NearestShowtimeCount}场</h6>
		     
		     <div className="pos">
		     <a href="#">
               购票
		     </a></div>
</div>
	     </li>)}

	  </ul>
	  </div>
         





		</div>)
	}

	componentDidMount(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=2018431520491874').then(res=>{
			console.log(res.data.ms)
			this.setState({
			datalist:res.data.ms
		})
		})
	}
	
	handleclick(data){
		this.props.history.push(`/detail/${data}`)
	}
}


export default Nowplaying;