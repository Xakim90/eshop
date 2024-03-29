import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import asyncValidate from "../Helpers/asyncValidate";
import Button from "@material-ui/core/Button";
import Axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";

const validate = values => {
    const errors = {};
    const requiredFields = [
        "name",
        "email",
        "password"
    ];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = "Ushbu maydon to'ldirilishi shart";
        }
    });
    if (
        values.email &&
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = "Noto'g'ri email";
    }
    return errors;
};

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        variant="outlined"
        size="small"
        {...input}
        {...custom}
    />
);

const Register = props => {
    const { pristine, reset, submitting, classes } = props;
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        // password_confirmation: ""
    });
    const change = (e) => {
        setUser( {
            ...user,
            [e.target.name]: e.target.value
        });
    }
    let url = "";
    if (process.env.MIX_API_URL === "local") {
        url = "http://localhost:8000";
    } else {
        url = "https://laravel-react-eshop.herokuapp.com";
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await props.createUser(user);
    }

    return (
        <div className="flex justify-center mt-3">
            <form className="w-1/2" onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="name"
                        component={renderTextField}
                        label="Ism"
                        fullWidth={true}
                        onChange={change}
                    />
                </div>
                <div className="mt-3">
                    <Field
                        name="email"
                        component={renderTextField}
                        label="Email"
                        fullWidth={true}
                        onChange={change}
                    />
                </div>
                <div className="mt-3">
                    <Field
                        name="password"
                        component={renderTextField}
                        label="Parol"
                        fullWidth={true}
                        onChange={change}
                    />
                </div>
                <div className="mt-3 flex">
                    <div>
                        <Button
                            variant="outlined"
                            disabled={pristine || submitting}
                            type="submit"
                            color="primary"
                        >
                            Kirish
                        </Button>
                    </div>
                    <div className="ml-2">
                        <Button
                            variant="contained"
                            onClick={reset}
                            color="secondary"
                        >
                            Tozalash
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: "MaterialUiForm", // a unique identifier for this form
    validate,
    asyncValidate
})(Register);
