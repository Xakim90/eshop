import React from "react";

const Brands = props => {
    return (
        <div className="w-full h-96">
            <h1>Welcome to Brands Page</h1>
            {props.brands.map((brand, index) => (
                <h3 className="text-blue-500" key={index}>
                    {brand.name}
                </h3>
            ))}
        </div>
    );
};

export default Brands;
