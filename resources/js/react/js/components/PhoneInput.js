import React from "react";
import InputMask from "react-input-mask";

class PhoneInput extends React.Component {
    render() {
        return <InputMask {...this.props} mask="+9\9\8 99 999 99 99" maskChar=" " />;
    }
}

export default PhoneInput;