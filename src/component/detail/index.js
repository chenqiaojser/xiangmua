import React from "react";
import axios from "axios"
import "./index.css"
class Detail extends React.Component{
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
			<div id="header">
				<div id="nav1D">
					<span><a href="#/film"><i className="iconfont icon-back"></i></a></span>
					<span><i className="iconfont icon-favorite"></i></span>
					<span><i className="iconfont icon-cut"></i></span>
				</div>

				<div id="nav2D">
				  <h2>{this.state.datalist.titleCn}</h2>
				  <p>{this.state.datalist.titleEn}</p>

				</div>
			</div>

			<div id="mainD">
              <img src={this.state.datalist.image} />

              <div className="all">
                <p>{this.state.datalist.runTime}</p>
                <p>{this.state.datalist.type}</p>
                <p>{this.state.datalist.release?this.state.datalist.release.date:null}{this.state.datalist.release?this.state.datalist.release.location:null}上映</p>
                <h4>我想看</h4>
                <h4 className="h2">我要评分</h4>

              </div>
             </div>

             <div id="pic">
                <h2>查影讯/购票</h2>
             </div>

             <div id="back2"></div>
             <div id="story">
               <p>{this.state.datalist.content}<i className="iconfont icon-moreunfold"></i><i className="iconfont icon-less"></i></p>
               
             </div>

             <div id="back1"></div>
             <div id="content">
                <h2>网友短评({this.state.maplist.totalCount})</h2>
                <ul>
                   {
                   	this.state.looplist.map(item=>
                   		<li key={item.id}>
                           <img src={item.headurl} />
                           <div className="body">
	                           <p>{item.nickname}</p>
	                           <h4>{item.content}</h4>
                           </div>
                   		</li>
                   		)
                   }
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
		axios.get(`/Service/callback.mi/movie/Detail.api?movieId=${this.props.match.params.id}&locationId=290&t=201844144115386`).then(res=>{
			console.log(res.data)
			this.setState({
				datalist:res.data
			})
		})

		axios.get(`/Service/callback.mi/Movie/HotLongComments.api?movieId=${this.props.match.params.id}&pageIndex=1&t=2018488403055158`).then(res=>{
			console.log(res.data)
			this.setState({
				looplist:res.data.comments,
				maplist:res.data
			})
		})
	}
}


export default Detail;