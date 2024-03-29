import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'
import Repo from './modules/Repo'
import Home from './modules/Home'
//render(<App/>, document.getElementById('app'))
import { Router, Route, browserHistory,IndexRoute } from 'react-router'

render((
  <Router history={browserHistory}>
  	<IndexRoute compoent={Home} />
    <Route path="/" component={App}>
    <Route path="/repos" component={Repos}>     
    	<Route path="/repos/:userName/:repoName" component={Repo}/>
    </Route>
    <Route path="/about" component={About}/>
    </Route>
  </Router>
), document.getElementById('app'))
