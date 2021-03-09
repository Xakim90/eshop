import React from 'react';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import image01 from './images/image01.jpg';
import image02 from './images/image02.jpg';
import image03 from './images/image03.png';
import image04 from './images/image04.png';

const Carousel = () => {
    return (
        <div>
            <Splide
                options={{
                    type: "loop",
                    gap: "1rem",
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: false,
                    arrows: "slider"
                }}
            >
                <SplideSlide>
                    <img className="w-full h-80" src={image01} alt="Image 1" />
                </SplideSlide>
                <SplideSlide>
                    <img className="w-full h-80" src={image02} alt="Image 2" />
                </SplideSlide>
                <SplideSlide>
                    <img className="w-full h-80" src={image03} alt="Image 3" />
                </SplideSlide>
                <SplideSlide>
                    <img className="w-full h-80" src={image04} alt="Image 4" />
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Carousel;