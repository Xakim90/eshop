import React from 'react';

const services = [
	{
		name: "Eshop+",
		href: "#"
	},
	{
		name: "Grocery Pickup & Delivery",
		href: "#"
	},
	{
		name: "Money center",
		href: "#"
	},
	{
		name: "Eshop credit card",
		href: "#"
	},
	{
		name: "Eshop pay",
		href: "#"
	},
	{
		name: "Weekly Ad",
		href: "#"
	},
	{
		name: "Other Services",
		href: "#"
	},
]

const Item3 = () => {
	return (
        <>
            <div>
                <p className="font-extrabold">Eshop Services</p>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <span>
                                <a href={service.href} className="font-thin text-xs">{service.name}</a>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Item3;