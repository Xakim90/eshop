import React, { useState } from "react";
import Modal from "../components/Modal";
import AddBrand from './AddBrand';
import AddProduct from "./AddProduct";

const Add = props => {
    return (
        <>
            <div className="flex mt-3">
                <div>
                    <Modal
                        openBtn="Добавить Продукт"
                        modalHeaderTitle="Добавить Продукт"
                        component={
                            <AddProduct
                                createProduct={props.createProduct}
                                brands={props.brands}
                                categories={props.categories}
                            />
                        }
                    />
                </div>
                <div>
                    <Modal
                        openBtn="Добавить Бренд"
                        modalHeaderTitle="Добавить Бренд"
                        component={
                            <AddBrand
                                createBrand={props.createBrand}
                                categories={props.categories}
                            />
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default Add;
