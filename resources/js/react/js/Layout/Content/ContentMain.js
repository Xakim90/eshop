import React from 'react';
import { Route, Switch } from "react-router";
import Appliances from "../../Pages/Appliances";
import Home from "../../Pages/Home";
import Register from "../../Pages/Register";
import Notebooks from "../../Pages/Notebooks";
import Phones from "../../Pages/Phones";
import Brands from "../../Pages/Brands";
import Sports from "../../Pages/Sports";
import Tv from "../../Pages/Tv";
import AddProduct from "../../Pages/AddProduct";
import AddCategory from "../../Pages/AddCategory";
import AddCatalog from "../../Pages/AddCatalog";
import AddBrand from "../../Pages/AddBrand";
import Test from "../../Pages/Test/Test";

const ContentMain = (props) => {
    return (
        <div className="mt-1 md:mt-5">
                    <Switch>
                        <Route exact path="/">
                            <Home
                                productsIsLoaded={props.data.productsIsLoaded}
                                products={props.data.products}
                            />
                        </Route>
                        <Route exact path="/phones">
                            <Phones brands={props.data.brands} products={props.data.products} categories={props.data.categories} />
                        </Route>
                        <Route exact path="/brands">
                            <Brands brands={props.data.brands} />
                        </Route>
                        <Route exact path="/notebooks">
                            <Notebooks />
                        </Route>
                        <Route exact path="/tv">
                            <Tv />
                        </Route>
                        <Route exact path="/appliances">
                            <Appliances />
                        </Route>
                        <Route exact path="/sports">
                            <Sports />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route path="/addproduct">
                            <AddProduct
                                createProduct={props.data.createProduct}
                                brands={props.data.brands}
                                categories={props.data.categories}
                            />
                        </Route>
                        <Route path="/addcategory">
                            <AddCategory
                                createCategory={props.data.createCategory}
                                catalogs={props.data.catalogs}
                            />
                        </Route>
                        <Route path="/addcatalog">
                            <AddCatalog
                                createCatalog={props.data.createCatalog}
                            />
                        </Route>
                        <Route path="/addbrand">
                            <AddBrand
                                createBrand={props.data.createBrand}
                                categories={props.data.categories}
                            />
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
                    </Switch>
                </div>
       );
}

export default ContentMain;
