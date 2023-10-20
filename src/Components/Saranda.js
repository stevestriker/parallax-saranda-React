import React from 'react'
import building1 from '../Imgs/Building1.png'
import building2 from '../Imgs/Building2.png'
import building3 from '../Imgs/Building3.png'
import building4 from '../Imgs/Building4.png'
import building5 from '../Imgs/Building5.png'
import building6 from '../Imgs/Building6.png'
import sea from '../Imgs/Sea.png'
import sky from '../Imgs/Sky.png'
import { useRef, useEffect, useLayoutEffect} from 'react'
import { gsap } from 'gsap'
import './Saranda.css'

const Saranda = () => {

  const tl = useRef(); //Timeline
  const b1 = useRef(); // The Buildings 
  const b2 = useRef();
  const b3 = useRef();
  const b4 = useRef();
  const b5 = useRef();
  const b6 = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ defaults: { duration: .10, ease: "power2.out"} });

      tl.current.from('#B1', {yPercent:100})
                .from('#B2', {yPercent:100})
                .from('#B3', {yPercent:100})
                .from('#B4', {yPercent:100})
                .from('#B5', {yPercent:-100})
                .from('#B6', {yPercent:-100})
                .from('#Sky', {yPercent:-100, duration:.45, ease:'bounce'})
                .from('#Sea', {opacity: 0, duration:6}, .15, "seaFadeIn")
      
        // gsap.from(b1.current, {
        //   duration:.35, yPercent:100, ease:'power4.out'
        // })
        // gsap.from(b2.current, {
        //   duration:.25, yPercent:100, ease:'power4.out'
        // })
        // gsap.from(b3.current, {
        //   duration:.3, yPercent:100, ease:'power4.out'
        // })
        // gsap.from(b4.current, {
        //   duration:.53, yPercent:-100, ease:'power4.out'
        // })
        // gsap.from(b5.current, {
        //   duration:.73, yPercent:-100, ease:'power4.out'
        // })
        // gsap.from(b6.current, {
        //   duration:.93, yPercent:-100, ease:'power4.out'
        // })

    }, )  // <- IMPORTANT! Scopes selector text

    return () =>  ctx.revert();

  }, [])


  return (
    <div className="saranda-wrapper">
        <img src={building1} className='building' ref={b1}alt='' id="B1"/>
        <img src={building2} className='building' ref={b2} alt='' id="B2"/>
        <img src={building3} className='building' ref={b3} alt='' id="B3"/>
        <img src={building4} className='building' ref={b4} alt='' id="B4"/>
        <img src={building5} className='building' ref={b5} alt='' id="B5"/>
        <img src={building6} className='building' ref={b6} alt='' id="B6"/>
        <img src={sea} alt='' id="Sea"/>
        <img src={sky} alt='' id="Sky"/>
    </div>
  )
}

export default Saranda