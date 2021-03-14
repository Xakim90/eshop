import React from "react";
import HeaderMain from "./HeaderMain";

const Header = props => {
    return (
        <>
            <HeaderMain
                catalogs={props.catalogs}
                isAuthorized={props.isAuthorized}
                setAuthorized={props.setAuthorized}
            />
        </>
    );
};
export default Header;
