import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

class AddBrand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category_id: "",
            name: "",
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    
    clearState() {
        this.setState({
            category_id: "",
            name: "",
        });
    }

    submit = event => {
        event.preventDefault();
        let formattedState =  {
            category_id: parseInt(this.state.category_id),
            name: this.state.name
        };
        this.props.createProduct(formattedState);
    };

    render() {
        return (
            <div className="flex justify-center">
                <form onSubmit={this.submit}>
                    <h1>Добавить категорию</h1>
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Brand name"
                        type="text"
                        variant="outlined"
                        value={this.state.name}
                        onChange={this.handleChange}
                        size="small"
                        name="name"
                    />
                    <br />
                    <br />

                    <select
                        value={this.state.category_id}
                        className="border py-2 px-2 cursor-pointer"
                        name="category_id"
                        onChange={this.handleChange}
                    >
                        <option>Выберите каталог : </option>
                        <option className="border py-2 px-3" value="1">
                            Смартфоны
                        </option>
                        <option value="2">Ноутбуки</option>
                        <option value="3">
                            Телевизоры, фото-видео и аудио
                        </option>
                        <option value="4">Бытовая техника</option>
                        <option value="5">Всё для офиса, дома и сада</option>
                        <option value="6">Спорт товары</option>
                    </select>
                    <br />
                    <br />
                    <div className="grid grid-cols-1">
                        <h3
                            className="text-blue-800"
                            id="requestSuccessInfo"
                        ></h3>
                        <h3
                            className="text-red-800"
                            id="requestErrorInfo"
                        ></h3>
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



export default AddBrand;
