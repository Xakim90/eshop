import React, { Component, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContentMain from "./Layout/Content/ContentMain";
import { productsAPI } from "./routes/api/productsAPI";
import { productsDetailsAPI } from "./routes/api/productsDetailsAPI";
import { catalogsAPI } from "./routes/api/catalogsAPI";
import { categoriesAPI } from "./routes/api/categoriesAPI";
import { brandsAPI } from "./routes/api/brandsAPI";
import { authAPI } from "./routes/api/usersAPI";

const Main = props => {

    useEffect(() => {
        props.getProducts();
        props.getCatalogs();
        props.getCategories();
        props.getBrands();
        props.getProfile();
    }, []);

    return (
        <div className="container mx-auto">
            <div className="sticky top-0 z-50">
                <Header
                    isAuthorized={props.isAuthorized}
                    catalogs={props.catalogs}
                    login={props.login}
                    logout={props.logout}
                    user={props.user}
                />
            </div>
            <ContentMain data={props} login={props.login} />
            <Footer />
        </div>
    );
};

const mapStateToProps = state => ({
    products: state.productsReducer.products,
    productsIsLoaded: state.productsReducer.loaded,
    catalogs: state.catalogsReducer.catalogs,
    catalogsIsLoaded: state.catalogsReducer.loaded,
    categories: state.categoriesReducer.categories,
    categoriesIsLoaded: state.categoriesReducer.loaded,
    brands: state.brandsReducer.brands,
    brandsIsLoaded: state.brandsReducer.loaded,
    isAuthorized: state.authReducer.isAuthorized,
    user: state.authReducer.user,
    loading: state.loaderReducer.loading
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(productsAPI.getProducts()),
    createProduct: data => dispatch(productsAPI.createProduct(data)),
    getCatalogs: () => dispatch(catalogsAPI.getCatalogs()),
    createCatalog: catalog => dispatch(catalogsAPI.createCatalog(catalog)),
    getCategories: () => dispatch(categoriesAPI.getCategories()),
    createCategory: category =>
        dispatch(categoriesAPI.createCategory(category)),
    getBrands: () => dispatch(brandsAPI.getBrands()),
    createBrand: brand => dispatch(brandsAPI.createBrand(brand)),
    login: user => dispatch(authAPI.login(user)),
    logout: () => dispatch(authAPI.logout()),
    createUser: user => dispatch(authAPI.createUser(user)),
    getProfile: () => dispatch(authAPI.getProfile()),
    createProductDetails: productDetails =>
        dispatch(productsDetailsAPI.createProductDetails(productDetails)),
    getProductDetail: (id) => dispatch(productsDetailsAPI.getProductDetail(id))
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
