import React from "react";
import Carousel from "../components/Carousel";
import CarouselAutoplay from "../components/CarouselAutoplay";
import RecipeReviewCard from "../components/RecipeReviewCard";

const Home = props => {
    return (
        <>
            <div className="flex w-full h-80">
                <div className="w-4/5">
                    <Carousel />
                </div>
                <div className="w-3/4 ml-3">
                    <img
                        className="h-80 rounded-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxhrP9PZeF5tkU5XJiI3j9uNBqCcrQvvU2jw&usqp=CAU"
                        alt="image"
                    />
                </div>
            </div>
            <p className="text-3xl font-bold">Популярные товары</p>
            <CarouselAutoplay
                productsIsLoaded={props.productsIsLoaded}
                products={props.products}
            />
        </>
    );
};

export default Home;
