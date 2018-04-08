import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
} from "react-router-dom";
import App from "../App"
import Home from "../component/home"
import Film from "../component/film"
import Card from "../component/card"
import Detail from "../component/detail"
import Nowplaying from "../component/film/nowplaying"
import Comingsoon from "../component/film/comingsoon"
import Register from "../component/register"
import Login from "../component/login"

import React from "react"
const router=(
	<Router>
	 <App>
	 <Switch>
       <Route path="/home" component={Home} />
       <Route path="/film" render={()=>
       	<Film>
       	<Switch>
          <Route path="/film/nowplaying" component={Nowplaying} />
          <Route path="/film/comingsoon" component={Comingsoon} />
          <Redirect from="" to="/film/nowplaying" />
          </Switch>
          
       	</Film>
       } />
       <Route path="/card" component={Card} />
       <Route path="/register" component={Register} />
       <Route path="/login" component={Login} />
       <Route path="/detail/:id" exact component={Detail} />
       <Redirect from="*" to="/home" />
       </Switch>
	 </App>
	</Router>
)

export default router;