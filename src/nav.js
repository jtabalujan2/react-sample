import React from 'react'
import {Link, NavLink} from 'react-router-dom'


function Nav() {
    return (
        <ul activeClassName='navbar' >
            <li>
                <NavLink exact activeClassName="active"to='/'>
                    Popular
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" className="navbar" to='/battle'>
                    Battle
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav