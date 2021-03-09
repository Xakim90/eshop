import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecipeReviewCard from './RecipeReviewCard';

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
const CarouselAutoplay = ({data}) => {
    return (
        <div className="wrapper">
            <Splide
                className="mb-3"
                options={{
                    type: "loop",
                    gap: "1rem",
                    autoplay: true,
                    pauseOnHover: false,
                    resetProgress: false,
                    arrows: "slider",
                    width: "100%",
                    // height: "20vh",
                    perPage: 6,
                    lazyLoad: "nearby",
                    breakpoints: {
                        640: {
                            perPage: 2
                        },
                        768: {
                            perPage: 4
                        }
                    }
                }}
                hasSliderWrapper
                // hasAutoplayControls
                // hasAutoplayProgress
            >
                {data.map((item, index) => (
                    <SplideSlide key={index}>
                        <RecipeReviewCard data={item} />
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default CarouselAutoplay;
