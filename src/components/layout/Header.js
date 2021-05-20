import React, { useState } from 'react'
import { startOfURL } from '../../shared/helpers/UrlHelper'
import {NavLink, useHistory} from 'react-router-dom'
import './styles/layout.scss'

const Header = () => {
    
    const history = useHistory()

    const [openClose, setOpenClose] = useState(false)

    const home = () => {
        history.push("/")
    }

    const toggle = () => {
        setOpenClose(!openClose)
    }
    

    return (
        <>
            <div className="header-section">

                <ul>
                    <NavLink className={startOfURL() === undefined ? "active" : ""} exact to="/"><li>Lobby</li></NavLink>
                    <NavLink className={startOfURL() === 'account' ? "active" : ""} exact to="/account"><li>Account</li></NavLink>
                    <NavLink className={startOfURL() === 'messages' ? "active" : ""} exact to="/messages"><li>Messages</li></NavLink>
                </ul>

                <div className="menu-btn" onClick={toggle} id={openClose ? 'open' : ''}>
                    <div className="menu-btn_burger"></div>
                </div>
            </div>

            <div className="slideInMenu" id={openClose ? 'activeMenu' : ''}>
                <ul>
                    <NavLink className={startOfURL() === undefined ? "active" : ""} onClick={toggle} exact to="/"><li>Lobby</li></NavLink>
                    <NavLink className={startOfURL() === 'account' ? "active" : ""} onClick={toggle} exact to="/account"><li>Account</li></NavLink>
                    <NavLink className={startOfURL() === 'messages' ? "active" : ""} onClick={toggle} exact to="/messages"><li>Messages</li></NavLink>
                </ul>
            </div>
        </>
    )
}

export default Header
