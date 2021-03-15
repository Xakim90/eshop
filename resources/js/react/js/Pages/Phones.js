import React from "react";

const Phones = props => {
    return (
        <div className="w-full h-96">
            <h1>Welcome to Phone Page</h1>
            {props.categories.map((category, index) => (
                <h3 className="text-red-500" key={index}>
                    {category.title}
                </h3>
            ))}
        </div>
    );
};

export default Phones;
