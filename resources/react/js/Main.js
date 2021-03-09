import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContentMain from "./Layout/Content/ContentMain";
import { productsAPI } from "./api/productsAPI";

const Main = props => {
    // const [count, setCount] = useState(0);
    const [isAuthorized, setisAuthorized] = useState(false);

    const setAuthorized = () => {
        setisAuthorized(true);
    };

    const products = [
        {
            id: 34,
            created_at: "2021-03-08 13:54:25",
            updated_at: "2021-03-08 13:54:25",
            title: "Redmi 9 Pro",
            description: "Yangi Redmi 9 Pro",
            price: 300,
            availability: true,
            photo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2aQVhPpUi0D4mXXntvERM1Kk2JCPf-tgiXA&usqp=CAU",
            categoryId: 1,
            brandId: 3,
            brandName: "Xiaomi"
        },
        {
            id: 32,
            created_at: "2021-03-08 13:42:13",
            updated_at: "2021-03-08 13:42:13",
            title: "Samsung A01",
            description: "New Samsung A01",
            price: 90,
            availability: true,
            photo:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuZgxaZSWPwXczzAJT-rePO2S_CORtexEe8g&usqp=CAU",
            categoryId: 1,
            brandId: 2,
            brandName: "Samsung"
        },
        {
            id: 33,
            created_at: "2021-03-08 13:48:24",
            updated_at: "2021-03-08 13:48:24",
            title: "Apple Iphone 12 PRo",
            description: "Yap yangi Ayfon 12 pro",
            price: 1500,
            availability: false,
            photo:
                "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000",
            categoryId: 1,
            brandId: 1,
            brandName: "Apple"
        }
    ];

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
                    products={products}
                />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.productsReducer.products
    // initialized: state.authReducer.initialized
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(productsAPI.getProducts()),
    createProduct: data => dispatch(productsAPI.createProduct(data))
});

const MainContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Main);

const Eshop = props => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <MainContainer />
            </Provider>
        </BrowserRouter>
    );
};

export default Eshop;
