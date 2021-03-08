import React from "react";
import HeaderMain from "./HeaderMain";

const Header = (props) => {
    return (
        <>
            <HeaderMain
                isAuthorized={props.isAuthorized}
                setAuthorized={props.setAuthorized}
            />
        </>
    );
};
export default Header;
