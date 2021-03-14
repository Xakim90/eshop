import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import { productsAPI } from "./api/productsAPI";
import { catalogsAPI } from "./api/catalogsAPI";
import { Route, Switch } from "react-router";
import Appliances from "./Pages/Appliances";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Notebooks from "./Pages/Notebooks";
import Phones from "./Pages/Phones";
import Sports from "./Pages/Sports";
import Tv from "./Pages/Tv";
import AddProduct from "./Pages/AddProduct";
import AddCategory from "./Pages/AddCategory";
import AddCatalog from "./Pages/AddCatalog";
import Test from "./Pages/Test/Test";

class Main extends Component {
    constructor(props) {
    super(props);
        this.state = {
            allProducts: this.props.products
         };
     }
     componentDidMount() {
         this.props.getProducts();
         this.props.getCatalogs();
     }

    //  componentDidUpdate() {
    //      console.log("componentDidUpdate");
    //      this.props.getProducts();
    //      this.props.getCatalogs();
    //  }

    setAuthorized = () => {
        setisAuthorized(true);
    };

    // useEffect(() => {
    //     props.getProducts();
    //     props.getCatalogs();
    // }, []);
    
    render () {
        return (
            <div className="container mx-auto">
                <div className="sticky top-0 z-50">
                    <Header
                        isAuthorized={this.state.isAuthorized}
                        setAuthorized={this.setAuthorized}
                        catalogs={this.props.catalogs}
                    />
                </div>
                <div className="mt-1 md:mt-5">
                    <Switch>
                        <Route exact path="/">
                            <Home
                                productsIsLoaded={this.props.productsIsLoaded}
                                products={this.props.products}
                            />
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
                            <AddProduct createProduct={this.props.createProduct} />
                        </Route>
                        <Route path="/addcategory">
                            <AddCategory />
                        </Route>
                        <Route path="/addcatalog">
                            <AddCatalog createCatalog={this.props.createCatalog} />
                        </Route>
                        <Route path="/test">
                            <Test />
                        </Route>
                    </Switch>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    products: state.productsReducer.products,
    productsIsLoaded: state.productsReducer.loaded,
    catalogs: state.catalogsReducer.catalogs,
    catalogsIsLoaded: state.catalogsReducer.loaded,
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(productsAPI.getProducts()),
    createProduct: data => dispatch(productsAPI.createProduct(data)),
    getCatalogs: () => dispatch(catalogsAPI.getCatalogs()),
    createCatalog: catalog => dispatch(catalogsAPI.createCatalog(catalog)),
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
