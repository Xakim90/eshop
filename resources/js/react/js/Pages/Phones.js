import React, { useState } from "react";
import RecipeReviewCard from "../components/RecipeReviewCard";

const Phones = props => {
    const [brand, setBrand] = useState({ currentBrand: "" });
    return (
        <>
            <div className="mt-5 w-full h-full flex justify-around">
                {props.categories.map(category =>
                    category.catalog_id === 1 ? (
                        <div
                            className="text-gray-500 text-2xl"
                            key={category.id}
                        >
                            <p>{category.title}</p>
                            {props.brands.map(brand =>
                                brand.category_id === category.id ? (
                                    <a
                                        onClick={() =>
                                            setBrand({
                                                currentBrand: brand.name
                                            })
                                        }
                                        className="block cursor-pointer text-lg"
                                        key={brand.id}
                                    >
                                        {brand.name}
                                    </a>
                                ) : null
                            )}
                        </div>
                    ) : null
                )}
            </div>
            <hr/>
            <div className="grid mt-2 grid-cols-6 gap-4">
                {brand.currentBrand !== ""
                    ? props.products.map((product, index) =>
                          brand.currentBrand === product.brandName && product.categoryId === 1 ? (
                              <div className="text-red-500 " key={index}>
                                  <RecipeReviewCard
                                      productsIsLoaded={props.productsIsLoaded}
                                      data={product}
                                  />
                              </div>
                          ) : null
                      )
                    : null}
            </div>
        </>
    );
};

export default Phones;
