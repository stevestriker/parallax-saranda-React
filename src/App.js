import React, { useEffect, useState } from 'react'
import useLocalStorage from 'use-local-storage'
import Navbar from './Components/Navbar'
import Saranda from './Components/Saranda'
import Loader from './Components/Loader'
import './App.css'

const App = () => {

  const [loaded, setLoaded] = useState(false)
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  useEffect(() => {
    setLoaded(true)
  }, [theme])

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }
  
  return (
  <>
    {!loaded ? (<Loader data-theme={theme}/>) :
    (<>
    <Navbar data-theme={theme}/>
    <Saranda data-theme={theme}/>
    </>
    )}
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
