import React from 'react'
import useLocalStorage from 'use-local-storage'
import Navbar from './Components/Navbar'
import Saranda from './Components/Saranda'
import './App.css'

const App = () => {

  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  
  return (
  <>
    <Navbar data-theme={theme}/>
    <Saranda data-theme={theme}/>
  </>
  )
}

export default App

    // {/* <header data-theme={theme}>
    //   <nav>
    //     <div onClick={switchTheme} className="theme-switch">
    //       <img src={moon} className='dark-moon' id='toggle'>
    //       </img>
    //     </div>
    //   </nav>
    // </header> */}
