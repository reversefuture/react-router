import React from 'react'
import {Link} from 'react-router'
import NavLink from './NavLink'
import LinkProp from './LinkProp'
import NavComplicated from './NavComplicated'
import Home from './Home'
import { IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return <div>Hello, React Router!<strong>Fuch you!!!!!</strong>
	    <ul role='nave'>
		<li><Link to="/repos" activeClassName="active">Repos</Link></li>
		<li><NavLink to="/about">About</NavLink></li>
		<li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
	    </ul>
	    {this.props.children || <Home/>}	
	</div>
  }
})
