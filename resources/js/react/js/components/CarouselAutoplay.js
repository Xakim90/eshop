import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import RecipeReviewCard from './RecipeReviewCard';
import Card from './Card';
import CircularProgress from "@material-ui/core/CircularProgress";

/**
 * The function for the basic example.
 *
 * @return {FunctionComponent} - Function component.
 */
const CarouselAutoplay = (props) => {
    return (
        <div className="wrapper">
            {!props.productsIsLoaded ? (
                <div className="grid  grid-rows-1 grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-6">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            ) : (
                <Splide
                    className="mb-3"
                    options={{
                        type: "loop",
                        gap: "0.5rem",
                        autoplay: true,
                        pauseOnHover: false,
                        resetProgress: false,
                        arrows: "slider",
                        width: "100%",
                        perMove: 1,
                        // height: "20vh",
                        // perPage: 6,
                        lazyLoad: "nearby",
                        interval: 2000,
                        breakpoints: {
                            640: {
                                perPage: 2
                            },
                            768: {
                                perPage: 4
                            },
                            1024: {
                                perPage: 5
                            },
                            1440: {
                                perPage: 6
                            },
                            2560: {
                                perPage: 8
                            }
                        }
                    }}
                    hasSliderWrapper
                    // hasAutoplayControls
                    // hasAutoplayProgress
                >
                    {props.products.map((item, index) => (
                        <SplideSlide key={index}>
                            <RecipeReviewCard
                                productsIsLoaded={props.productsIsLoaded}
                                data={item}
                            />
                        </SplideSlide>
                    ))}
                </Splide>
            )}
        </div>
    );
};

export default CarouselAutoplay;
