import React from 'react';
import ImgageSlider from '../Carousel/ImgageSlider';
import { Sliderpicture } from '../Carousel/SliderData';


const Home = () => {
    return (
        <div>
        <ImgageSlider slider={Sliderpicture} ></ImgageSlider>
            
        </div>
    );
};

export default Home;