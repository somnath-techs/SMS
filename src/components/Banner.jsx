import React from 'react'
import '../assets/css/banner.css'
const Banner = () => {
  return (
    <div className='banner'>
        <div className='banner-content'>
        <h1 className='abs heading-col'>Hello Students,<br/>WellCome to Our Collage</h1>
        <p className='abs para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero<br/> exercitationem quisquam ut, maiores facilis? Possimus<br/> fugit adipisci eaque maxime numquam quos delectus deserunt,<br/> rem quidem corrupti placeat magnam labore!</p>
        </div>
        <img className='image-acjust' src="https://media.istockphoto.com/id/2062622583/photo/portrait-of-female-college-student-stock-photo.jpg?s=2048x2048&w=is&k=20&c=u-fC1hDc4KV8CIZnKH00cBi5nD5o3vj6rvs7SE8j28w="/>
    </div>
  )
}

export default Banner