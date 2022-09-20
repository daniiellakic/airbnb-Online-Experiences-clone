import Raect from "react";
import image from "../assets/Group 77.png"


function Hero() {
   
    return (
      <section className="hero">
            <h1 className="hero-text">Online Experiences</h1>
            <p className="hero-text-p">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            <img className="hero-image" src={image} alt="image" />
            <div className="card__headline">Best sellers</div>
      </section>
   )
}

export default Hero;