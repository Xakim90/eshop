import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

class AddProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            price: "",
            categoryId: "",
            brandId: "",
            availability: "",
            brandName: "",
            photo: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    setBrandName = e => {
        this.setState({
            brandName: e.nativeEvent.target.selectedOptions[0].label
        });
    };

    clearState() {
        this.setState({
            availability: "",
            brandName: "",
            brandId: "",
            categoryId: "",
            description: "",
            photo: "",
            price: "",
            title: "",
        });
    }

    submit = event => {
        event.preventDefault();
        let formattedState =  {
            availability: parseInt(this.state.availability),
            brandName: this.state.brandName,
            brandId: parseInt(this.state.brandId),
            categoryId: parseInt(this.state.categoryId),
            description: this.state.description,
            photo: this.state.photo,
            price: parseInt(this.state.price),
            title: this.state.title,
        };
        this.props.createProduct(formattedState);
    };

    render() {
        return (
            <div className="flex justify-center">
                <form onSubmit={this.submit}>
                    <h1>Добавить продукт</h1>
                    <br />
                    <TextField
                        id="outlined-email-input-01"
                        label="Title"
                        type="text"
                        variant="outlined"
                        value={this.state.title}
                        onChange={this.handleChange}
                        size="small"
                        name="title"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-email-input-02"
                        label="Description"
                        type="text"
                        variant="outlined"
                        value={this.state.description}
                        onChange={this.handleChange}
                        size="small"
                        name="description"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Price"
                        type="number"
                        variant="outlined"
                        value={this.state.price}
                        onChange={this.handleChange}
                        size="small"
                        name="price"
                    />
                    <br />
                    <br />
                    <TextField
                        id="outlined-password-input"
                        label="Enter photo url"
                        type="text"
                        variant="outlined"
                        value={this.state.photo}
                        onChange={this.handleChange}
                        size="small"
                        name="photo"
                    />
                    <br />
                    <br />
                    <select
                        value={this.state.categoryId}
                        className="border py-2 px-2 cursor-pointer"
                        name="categoryId"
                        onChange={this.handleChange}
                    >
                        <option>Выберите категорию:</option>
                        <option className="border py-2 px-3" value="1">
                            Смартфоны
                        </option>
                        <option value="2">Ноутбуки</option>
                        <option value="3">Бытовая техника</option>
                    </select>
                    <br />
                    <br />
                    <select
                        value={this.state.brandId}
                        className="border py-2 px-2 cursor-pointer"
                        name="brandId"
                        data-value={this.state.brandName}
                        // onClick={e => this.setBrandName(e)}
                        onChange={e => {
                            this.handleChange(e);
                            this.setBrandName(e);
                        }}
                    >
                        <option>Выберите Бренд:</option>
                        <option className="border py-2 px-3" value={1}>
                            Apple
                        </option>
                        <option value={2}>Samsung</option>
                        <option value={3}>Xiaomi</option>
                    </select>
                    <br />
                    <br />
                    <select
                        value={this.state.availability}
                        className="border py-2 px-2 cursor-pointer"
                        name="availability"
                        onChange={this.handleChange}
                    >
                        <option>Есть ли в наличии:</option>
                        <option className="border py-2 px-3" value={1}>
                            Есть
                        </option>
                        <option value={0}>Нет</option>
                    </select>
                    <br />
                    <div className="grid grid-cols-1">
                        <p id="signupErrorDiv"></p>
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



export default AddProduct;
