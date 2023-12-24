import React from 'react'
import './Home.css'
import { GiScooter } from "react-icons/gi";
import { GiCoffeeCup } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { TbReplace } from "react-icons/tb";
import Nav from '../NAV-BAR/Nav';
const Home = () => {
  return (
    <div>
      
<Nav/>
     

     {/* ..............................carousel section............................. */}
   <div className="carosel-images">
   
     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/mybanner.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/bannerimg3.webp" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="/banner.webp" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     </div>

     {/* ............................. react icons .................... */}
<div className="react-icons">

  <GiScooter className='my-scooter' />
  <GiCoffeeCup className='my-cooffecup'/>
  <GiHamburger className='my-snaks' />
  <TbReplace className='my-replacement' />
</div>
<div className="rect-icon-description">
  <h6>Free Delivery on
First order</h6>
<h6 id='taste'>Best Taste Guaranttee</h6>
<h6 id='dishes'>Variety of Dishes</h6>
<h6>90%Repeat Customer</h6>
</div>


{/* ......................... welcome ........................... */}

<div className="welcome">
<div className="welcome-part">
<div className="welcome-headding">
    <h1>Welcome To Mern-T</h1>
  </div>
  <div className="welcome-description">
    <p>At Mern-T, we are more than just coffee enthusiasts; we are purveyors of the extraordinary coffee experience.

We invite you to become a part of our coffee family, where every coffee lover is united by the appreciation of exceptional coffee and the joy it brings to life's moments.</p>
</div>
  </div>
  <div className="welcome-imges">
  <img src="/top-vicoffee.jpg" alt="" />
  <img src="/samoosa.avif" alt="" />
 
  
    <img src="/fresh-coffee.avif" alt="" />
  </div>
</div> 
{/* ................................................................................................. */}
<div className="coffe-cup-description">

  <div className="section1">
    <div className="section-left">
      <div className="logo"></div>
    </div>
  </div>
</div>


   </div>
  )
}

export default Home
