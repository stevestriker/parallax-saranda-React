import React, {useState} from 'react'
import useLocalStorage from 'use-local-storage'
import {Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import woman1 from '../Imgs/woman1.png'
import woman2 from '../Imgs/woman2.png'
import woman3 from '../Imgs/woman3.png'
import woman4 from '../Imgs/woman4.png'
import woman5 from '../Imgs/woman5.png'
import sun from '../Imgs/sun.png'
import moon from '../Imgs/moon.png'
import striker from '../Imgs/striker.png'
import './Navbar.css'   

const Navbar = () => {

    const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
    
    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
            setTheme(newTheme)
    }

    const [click, setClick] = useState(false)
        const handleClick = () => setClick(!click)
        const closeMobileMenu = () => setClick(false)

return (
    <>
    <nav className="navbar" data-theme={theme}>
        <div className="navbar-container">
            <img src={striker} className='striker-logo' onClick={closeMobileMenu}></img>
            <div className="icons-nav"> 
            <span className='icons'>
            <li>
            <img src={woman2} className='woman2'></img>
            </li>
            <li>
            <img src={woman1} className='woman1`'></img>
            </li>
            <li>
            <img src={woman3} className='woman3'></img>
            </li>
            <li>
            <img src={woman4} className='woman4'></img>
            </li>
            <li>
            <img src={woman5} className='woman5'></img>
            </li>
            </span>

            <div onClick={switchTheme} className="theme-switch">
                <img src={moon} className='dark-moon' id='toggle'>
                </img>
            </div>
            </div>

            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
        </div>
    </nav>
    </>
)
}

export default Navbar