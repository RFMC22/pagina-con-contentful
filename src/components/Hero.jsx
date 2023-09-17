import React from 'react'
import heroImg from '../assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, tenetur!</p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="mujer en la computadora" className='img'/>
        </div>
      </div>
    </section>
  )
}

export default Hero