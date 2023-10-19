import React, {useState} from 'react'
import useLocalStorage from 'use-local-storage'
import {Link, NavLink} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import woman1 from '../imgs/woman1.png'
import woman2 from '../imgs/woman2.png'
import woman3 from '../imgs/woman3.png'
import woman4 from '../imgs/woman4.png'
import woman5 from '../imgs/woman5.png'
import sun from '../imgs/sun.png'
import moon from '../imgs/moon.png'
import striker from '../imgs/striker.png'
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

            <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </div>
        </div>
    </nav>
    </>
)
}

export default Navbar