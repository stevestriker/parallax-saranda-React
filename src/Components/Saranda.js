import React from 'react'
import building1 from '../Imgs/Building1.png'
import building2 from '../Imgs/Building2.png'
import building3 from '../Imgs/Building3.png'
import building4 from '../Imgs/Building4.png'
import building5 from '../Imgs/Building5.png'
import building6 from '../Imgs/Building6.png'
import sea from '../Imgs/Sea.png'
import sky from '../Imgs/Sky.png'
import sun from '../Imgs/sun.png'
import './Saranda.css'

const Saranda = () => {

  return (
    <div className="saranda-wrapper">
        <img src={building1} alt='teeth' id="B1"/>
        <img src={building2} alt='teeth' id="B2"/>
        <img src={building3} alt='teeth' id="B3"/>
        <img src={building4} alt='teeth' id="B4"/>
        <img src={building5} alt='teeth' id="B5"/>
        <img src={building6} alt='teeth' id="B6"/>
        <img src={sea} alt='teeth' id="Sea"/>
        <img src={sky} alt='teeth' id="Sky"/>
    </div>
  )
}

export default Saranda