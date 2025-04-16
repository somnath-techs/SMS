import React from 'react'
import "../assets/css/card.css"
import Addmission from './../pages/Addmission';

const Card = () => {
  return (
    <>
    <div class="card">
  <div class="image_container">
    <img className='imgae-resize' src="https://media.istockphoto.com/id/660142228/photo/candid-portrait-of-young-woman-using-laptop.jpg?s=2048x2048&w=is&k=20&c=QaeFG395J3g4lLJDMsLUG0jhQgXWE8gB18yN6930vQ8="/>
  </div>
  <div class="title">
    <span>B.tech CSE</span>
  </div>
  <div >
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </span>
  </div>
  
  <div class="action">
    <button class="cart-button">
      
      <span>Addmission</span>
    </button>
  </div>
</div>

    
    </>
  )
}

export default Card