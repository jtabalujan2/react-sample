import React from 'react'
import { NavLink} from 'react-router-dom'


function Nav() {
    return (
        <ul activeClassName='nav' >
            <li>
                <NavLink exact activeClassName="active" className="navbar" to='/'>
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