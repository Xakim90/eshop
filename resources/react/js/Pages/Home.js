import React from "react";
import Carousel from "../components/Carousel";
import CarouselAutoplay from "../components/CarouselAutoplay";
import RecipeReviewCard from "../components/RecipeReviewCard";

const Home = props => {
    return (
        <>
            <div className="w-full h-80">
                <Carousel />
            </div>
            <p className="text-3xl font-bold">Популярные товары</p>
            <CarouselAutoplay data={props.products} />
        </>
    );
};

export default Home;
