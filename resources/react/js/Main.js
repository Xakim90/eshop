import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import ContentMain from './Layout/Content/ContentMain';
import { productsAPI } from './api/productsAPI'; 

const Main = (props) => {
    // const [count, setCount] = useState(0);
    const [isAuthorized, setisAuthorized] = useState(false);

    const setAuthorized = () => {
        setisAuthorized(true)
    }

    useEffect(() => {
        props.getProducts();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="sticky top-0 z-50">
                <Header
                    isAuthorized={isAuthorized}
                    setAuthorized={setAuthorized}
                />
            </div>
            <div>
                <ContentMain
                    createProduct={props.createProduct}
                    products={props.products}
                />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    products: state.productsReducer.products,
    // initialized: state.authReducer.initialized
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(productsAPI.getProducts()),
    createProduct: (data) => dispatch(productsAPI.createProduct(data))
});

const MainContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Main);

const Eshop = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <MainContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default Eshop;
