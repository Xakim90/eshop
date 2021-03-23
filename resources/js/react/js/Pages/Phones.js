import React, { useState } from "react";

const Phones = (props) => {
    const [state, setState] = useState({
        
    });
    // const open = () => {

    // }
    return (
        <div className="mt-5 w-full h-full flex justify-around">
            {props.categories.map(category =>
                category.catalog_id === 1 ? (
                    <div className="text-gray-500" key={category.id}>
                        <h3>{category.title}</h3>
                        {props.brands.map(brand =>
                            brand.category_id === category.id ? (
                                <a className="block" href={brand.name} key={brand.id}>{brand.name}</a>
                            ) : null
                        )}
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Phones;
