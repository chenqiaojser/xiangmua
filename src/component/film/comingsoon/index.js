import React from "react";
import axios from "axios"
import "./index.css"

class Comingsoon extends React.Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[],
			looplist:[],
			maplist:[]
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
		  <h1>最受关注<span>(9部)</span></h1>
	      <h2><span>{this.state.datalist.rMonth}</span>月<span>{this.state.datalist.rDay}</span>日</h2>
	      <div className="one">
             <div className="first"><img src={this.state.datalist.image} onClick={this.handleclick.bind(this,this.state.datalist.id)}/></div>
		     <div className="second">
			     <h3>{this.state.datalist.title}</h3>
			     <h4><span>{this.state.datalist.wantedCount}</span>人想看 - {this.state.datalist.type}</h4>
			     <h5>导演 : {this.state.datalist.director}</h5>
			     <h5>演员 : {this.state.datalist.actor1},{this.state.datalist.actor2}</h5>
			     
		     
		     <div className="pos1">
		     <a href="#" className="span1"> 超前预告</a>
		     <a href="#" className="span2">预告片</a>
              
		     </div>
          </div>
	     </div>
	   </div>

      <div className="pic">
	       <h1><img src="https://static1.mtime.cn/feature/mobile/banner/2018/0319/sjk750210.jpg" /></h1>
       </div>



       <div id="bottom">
		  <h1>即将上映<span>(45部)</span></h1>
	      <h2><span>{this.state.maplist[0]?this.state.maplist[0].rMonth:''}</span>月<span>{this.state.maplist[0]?this.state.maplist[0].rDay:''}</span>日</h2>
	      <ul>
	      { this.state.maplist.map(item=>
	        <li className="one" key={item.id} onClick={this.handclick.bind(this,item.id)}>
             <div className="first"><img src={item.image} /></div>
		     <div className="second">
			     <h3>{item.title}</h3>
			     <h4><span>{item.wantedCount}</span>人想看 - {item.type}</h4>
			     <h5>导演 : {item.director}</h5>
			    
			     
		     
		     <div className="pos2">
		     <a href="#" className="span1"> 超前预告</a>
		     <a href="#" className="span2">预告片</a>
              
		     </div>
          </div>
	     </li>
	    )}
	     </ul>
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
    	<p><img src="/static/image/fot_logo.png" alt="" /></p>
    	<p>Copyright2006-2018Mtime.com Inc. All rights reserved.</p>
    </div>



			</div>)
	}

	componentDidMount(){
		axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018431931780549').then(res=>{
			console.log(res.data.attention[0])
			this.setState({
				datalist:res.data.attention[0]
			})
		})

        axios.get('/Service/callback.mi/Advertisement/MobileAdvertisementInfo.api?locationId=290&t=2018431931723931').then(res=>{
           this.setState({
           	looplist:res.data.advList[0]
           })
        })


		axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018431931780549').then(res=>{
			console.log(res.data.moviecomings)
			this.setState({
				maplist:res.data.moviecomings
			})
		})
	}

	handclick(data){
		console.log(data)
		this.props.history.push(`/detail/${data}`);
	}

	handleclick(data){
		this.props.history.push(`/detail/${data}`)
	}
}


export default Comingsoon; 