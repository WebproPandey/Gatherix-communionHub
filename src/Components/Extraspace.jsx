import gsap from 'gsap'
import React, { useEffect } from 'react'
import { useRef } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
const Extraspace = () => {
  const ExtraSapceRef =  useRef()
  
  useEffect(() => {
    gsap.to(ExtraSapceRef.current,{
      duration: 1,
      height: "0%",
      ease: 'linear',
      scrub:true,
      scrollTrigger:{
        trigger: '.FooterSection',
        start: 'top 60%',
        end: 'top 40%',
        scrub: 1,
      }
    })
  },[])

  return (
    <div ref={ExtraSapceRef} className='ExtraSapce h-full w-full absolute  top-0  left-0 bg-white'></div>
  )
}

export default Extraspace