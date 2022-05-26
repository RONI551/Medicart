import React, { useState } from 'react';
import { Sliderpicture } from './SliderData';
import './ImgageSlider.css'
import ArrowCircleLeftTwoToneIcon from '@mui/icons-material/ArrowCircleLeftTwoTone';
import ArrowCircleRightTwoToneIcon from '@mui/icons-material/ArrowCircleRightTwoTone';


const ImgageSlider = ({ slider }) => {
    const [current, setCurrent] = useState(0)
    const length = slider.length
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
       
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)


    }
    if (!Array.isArray(slider) || slider.length <= 0) {
        return null;
    }

    return (
        <div className='slider-parents'>
        <section className='slider-section'>
            <ArrowCircleLeftTwoToneIcon sx={{ fontSize: 70 }} className='left-arrow material-icons md-24' onClick={prevSlide} />
            <ArrowCircleRightTwoToneIcon sx={{ fontSize: 70 }} className='Right-arrow' onClick={nextSlide} />
            {Sliderpicture.map((slider, index) => {
                return (
                   <div className={ index===current ? 'slider active' : 'slider'} key={index} >
                   
                   {index === current && (<img src={slider.image} alt='travel-image' className= "Carousel-image" ></img>)}
                   </div>

                )
                
            })}
        </section>
        </div>
    );
};

export default ImgageSlider;