import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userPostFetch } from "../../actions/actions";
import { usersAPI } from "../../actions/api";
import TextField from "@material-ui/core/TextField";
import styles from "./Signin.module.css";

class Signup extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        role: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    clearState() {
        this.setState({ username: "", email: "", password: "", role: "" });
    }

    submit = event => {
        event.preventDefault();
        this.props.userPostFetch(this.state);
        this.clearState();
    };

    render() {
        return (
            <div className="grid grid-cols-1 gap-12">
                <form onSubmit={this.submit}>
                    <h1>Регистрация</h1>
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Имя"
                        type="text"
                        variant="outlined"
                        value={this.state.username}
                        onChange={this.handleChange}
                        size="small"
                        name="username"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-email-input-02"
                        label="Email"
                        type="email"
                        autoComplete="current-email"
                        variant="outlined"
                        value={this.state.email}
                        onChange={this.handleChange}
                        size="small"
                        name="email"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        value={this.state.password}
                        onChange={this.handleChange}
                        size="small"
                        name="password"
                    />
                    <br />
                    <br />
                    <select
                        value={this.state.role}
                        className="border py-2 px-2"
                        name="role"
                        onChange={this.handleChange}
                    >
                        <option>Выберите вашу роль в системе:</option>
                        <option className="border py-2 px-3" value="admin">
                            admin
                        </option>
                        <option value="operator">operator</option>
                        <option value="client">client</option>
                    </select>
                    <br />
                    <div className="col-md-6">
                        <p id="signupErrorDiv" className={styles.errorDiv}></p>
                    </div>
                    <input type="submit" className="btn btn-sm btn-light" />
                </form>
                <div className="signup">
                    <b>У вас уже есть аккаунт? тогда: </b>
                    <Link to="/signin" className="btn btn-sm btn-light">
                        Войдите
                    </Link>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(usersAPI.userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(Signup);
