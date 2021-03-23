import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

class AddBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerId: "",
            image: "",
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    clearState() {
        this.setState({
            bannerId: "",
            image: "",
        });
    }

    submit = event => {
        event.preventDefault();
        let banner_id = parseInt(this.state.bannerId);
        banner_id++;
        let formattedState = {
            bannerId: banner_id,
            image: this.state.image
        };
        this.props.createBrand(formattedState);
    };

    render() {
        return (
            <div className="flex justify-center">
                <form onSubmit={this.submit}>
                    <h1>Добавить главного баннера</h1>
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Banner image"
                        type="text"
                        variant="outlined"
                        value={this.state.image}
                        onChange={this.handleChange}
                        size="small"
                        name="name"
                    />
                    <br />
                    <br />

                    <div className="grid grid-cols-1">
                        <h5
                            className="text-blue-800"
                            id="requestSuccessInfo"
                        ></h5>
                        <h3 className="text-red-800" id="requestErrorInfo"></h3>
                    </div>
                    <input
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    />
                </form>
            </div>
        );
    }
}



export default AddBanner;
