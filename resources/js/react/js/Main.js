import React, { Component } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "./redux/redux-store";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import ContentMain from './Layout/Content/ContentMain';
import { productsAPI } from "./routes/api/productsAPI";
import { catalogsAPI } from "./routes/api/catalogsAPI";
import { categoriesAPI } from "./routes/api/categoriesAPI";
import { brandsAPI } from "./routes/api/brandsAPI";
import { authAPI } from "./routes/api/usersAPI";

class Main extends Component {
    componentDidMount() {
        this.props.getProducts();
        this.props.getCatalogs();
        this.props.getCategories();
        this.props.getBrands();
        // this.props.getProfile();
    }
    
    render() {
        return (
            <div className="container mx-auto">
                <div className="sticky top-0 z-50">
                    <Header
                        isAuthorized={this.props.isAuthorized}
                        catalogs={this.props.catalogs}
                        login={this.props.login}
                        user={this.props.user}
                    />
                </div>
                <ContentMain data={this.props} login={this.props.login} />
                <Footer />
            </div>
        );
    }
}

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
    user: state.authReducer.user
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
    getProfile: () => dispatch(authAPI.getProfile())
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
