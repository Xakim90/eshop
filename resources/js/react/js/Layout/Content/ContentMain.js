import React, { useState } from "react";
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
import Add from '../../Pages/Add';
import Login from '../../Pages/Login';
import { watchRequests } from "../../routes/api/loader";
import AddCharacteristics from '../../Pages/AddCharacteristics';
import ProductDetails from '../../Pages/ProductDetails';
import FileUpload from '../../Pages/FileUpload';

const ContentMain = (props) => {
    const [loading, setloading] = useState(false);
    const [open, setopen] = useState(false);
    const [errorText, seterrorText] = useState("No error, just continue)");
    watchRequests({ setloading, seterrorText, setopen });
    return (
        <div className="mt-1 md:mt-5">
            {/* {loading ? (
                "LOADING"
            ) : ( */}
            <Switch>
                <Route exact path="/">
                    <Home
                        productsIsLoaded={props.data.productsIsLoaded}
                        products={props.data.products}
                    />
                </Route>
                <Route exact path="/phones">
                    <Phones
                        brands={props.data.brands}
                        products={props.data.products}
                        categories={props.data.categories}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route exact path="/brands">
                    <Brands brands={props.data.brands} />
                </Route>
                <Route exact path="/notebooks">
                    <Notebooks
                        brands={props.data.brands}
                        products={props.data.products}
                        categories={props.data.categories}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route exact path="/tv">
                    <Tv
                        brands={props.data.brands}
                        products={props.data.products}
                        categories={props.data.categories}
                        productsIsLoaded={props.data.productsIsLoaded}
                    />
                </Route>
                <Route exact path="/appliances">
                    <Appliances />
                </Route>
                <Route exact path="/sports">
                    <Sports />
                </Route>
                <Route exact path="/register">
                    <Register createUser={props.data.createUser} />
                </Route>
                <Route exact path="/login">
                    <Login login={props.data.login} />
                </Route>
                <Route path="/addproduct">
                    <AddProduct
                        createProduct={props.data.createProduct}
                        brands={props.data.brands}
                        categories={props.data.categories}
                    />
                </Route>
                <Route path="/addproductdetails">
                    <AddCharacteristics
                        createProductDetails={props.data.createProductDetails}
                        products={props.data.products}
                    />
                </Route>
                <Route path="/addcategory">
                    <AddCategory
                        createCategory={props.data.createCategory}
                        catalogs={props.data.catalogs}
                    />
                </Route>
                <Route path="/addcatalog">
                    <AddCatalog createCatalog={props.data.createCatalog} />
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
                <Route path="/add">
                    <Add
                        createCategory={props.data.createCategory}
                        createCatalog={props.data.createCatalog}
                        createBrand={props.data.createBrand}
                        createProduct={props.data.createProduct}
                        catalogs={props.data.catalogs}
                        categories={props.data.categories}
                        brands={props.data.brands}
                        createProductDetails={props.data.createProductDetails}
                        productsIsLoaded={props.data.productsIsLoaded}
                        products={props.data.products}
                    />
                </Route>
                <Route path="/details/:id">
                    <ProductDetails
                        getProductDetail={props.data.getProductDetail}
                    />
                </Route>
                <Route path="/file">
                    <FileUpload />
                </Route>
            </Switch>
            {/* )} */}
        </div>
    );
}

export default ContentMain;
