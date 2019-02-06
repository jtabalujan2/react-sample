import React from 'react'
import {Link, NavLink} from 'react-router-dom'


function Nav() {
    return (
        <ul className='nav' >
            <li>
                <NavLink exact activeClassName="active" to='/'>
                    Popular
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="active" to='/battle'>
                    Battle
                </NavLink>
            </li>
        </ul>
    )
}

export default Nav