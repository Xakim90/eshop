import React, { Component } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import store from "../redux/redux-store";
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Main = () => {
    return (
        <>
            <div className="sticky top-0">
                <Header />
            </div>
            <div>
                <Footer />
                <Footer />
                <Footer />
                <Footer />
                <Footer />
                <Footer />
            </div>

        </>
    );
}

const mapStateToProps = state => ({
    // currentUser: state.authReducer.currentUser,
    // initialized: state.authReducer.initialized
});

const mapDispatchToProps = dispatch => ({
    // getProfileFetch: () => dispatch(usersAPI.getProfileFetch()),
    // logoutUser: () => dispatch(logoutUser())
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
