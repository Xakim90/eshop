import React from 'react';
import { Route, Switch } from "react-router";
import Appliances from '../../Pages/Appliances';
import Home from '../../Pages/Home';
import Register from '../../Pages/Register';
import Notebooks from '../../Pages/Notebooks';
import Phones from '../../Pages/Phones';
import Sports from '../../Pages/Sports';
import Tv from '../../Pages/Tv';
import AddProduct from '../../Pages/AddProduct';


const ContentMain = (props) => {
    return (
        <div className="mt-1 md:mt-5">
            <Switch>
                <Route exact path="/">
                    <Home products={props.products} />
                </Route>
                <Route exact path="/phones">
                    <Phones />
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
                    <AddProduct createProduct={props.createProduct} />
                </Route>
            </Switch>
        </div>
    );
}

export default ContentMain;
