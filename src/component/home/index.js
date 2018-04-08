import React from "react";
import "./index.css"
import axios from "axios"


class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={
			datalist:[],
			looplist:[],
			maplist:[]
		}
	}

	render(){
		return (
			<div>
			 <nav>
                <h1><a href=""><img src="http://static1.mtime.cn/html5/20180208104315/images/2014/logo_mtime.png" alt="" /></a></h1>
                <ul>
					<li>首页</li>
					<li>购票</li>
					<li>商城</li>
					<li>发现</li>
				</ul>
				<a href="#/login" style={{color:'white'}}><i  className="iconfont icon-account"></i></a>
             </nav>

             
		     <div id="search">
		    	<p>
		    		<span>北京</span>
		    		<span><i className="iconfont icon-moreunfold"></i></span>
		    	</p>
		    	<div>
		    		<input type="text" placeholder="影片/影院/影人，任你搜" />
		    		<span><i className="iconfont icon-search"></i></span>
		    	</div>
		     </div>
         
		     <div id="banner">
		        <h3>正在热映({this.state.datalist.length}部)</h3>
		        <a className="aa" href="#/film"><i className="iconfont icon-more"></i></a>
		        <ul>
                    {this.state.datalist.map(item=>
                    	<li key={item.id}>
                    	<dl>
                    	    <dt><img src={item.img} /></dt>
                    	    <dd>{item.t}</dd>
                    	</dl>
                    	 <span>{(item.r==-1)?null:item.r}</span>
                    	</li>
                    	)}
		        </ul>

		        <h4>即将上映({this.state.looplist.length}部)</h4>
		        <a className="bb" href="#/film/comingsoon"><i className="iconfont icon-more"></i></a>
		     </div>
		   
		     <div id="body">
		        <h3>今日热点</h3>
		        { this.state.maplist.map(item=>
		        <dl>
			        <dt><img src={item.img} /></dt>
			        <dd>
			            <h4>{item.title}</h4>
			            <p>{item.desc}</p>
			            
			        </dd>
		        </dl>
		      )}
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




			</div>
			)
	}

	componentDidMount(){
		axios.get('/Service/callback.mi/Showtime/LocationMovies.api?locationId=290&t=20184215172813163').then(res=>{
           
            this.setState({
            	datalist:res.data.ms
            })
        })

        axios.get('/Service/callback.mi/Movie/MovieComingNew.api?locationId=290&t=2018438382245833').then(res=>{
        	console.log(res.data)
        	this.setState({
        		looplist:res.data.moviecomings
        	})
        })

        axios.get('/Service/callback.mi/PageSubArea/GetFirstPageAdvAndNews.api?t=2018438511934451').then(res=>{
         this.setState({
         	maplist:res.data.hotPoints
         })
        })
			
	}
}


export default Home;