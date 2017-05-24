import React from 'react'
import {Link} from 'react-router'

export default  React.createClass({
    render(){
     var navItems = ['X', "Y", 'Z']
     var self = this;
     var NAV_ITEMS = navItems.map(function(item, i){
         return <li item={item} key={i} onMouseOver={self.handleMouseEnter}> {item}{i} </li>
     });
    return( <div> {NAV_ITEMS} </div> )
    }
})