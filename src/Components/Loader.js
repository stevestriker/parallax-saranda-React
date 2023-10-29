import React from 'react'
import data from '../Imgs/data-loader.gif'    
import striker from '../Imgs/striker.png'
import './Loader.css'

const Loader = () => {

    return (
        <div className="loader">
            <span className="loader-gif">
                <img src={striker} alt="Striker" className="striker" />
                <img src={data} alt="data-loader" className="data-gif" />
            </span>
        </div>
    )


}
export default Loader;