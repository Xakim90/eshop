import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import RecipeReviewCard from '../components/RecipeReviewCard';

const AddCharacteristics = (props) => {

    const [state, setState] = useState({
        "productId": 1,
        "version": "v1",
        "warranty": 12,
        "weight": "120 gr",
        "country": "China",
        "delivery": false,
        "fingerprint": true,
        "faceId": true,
        "nfc": true,
        "usbType": "usb 2.0",
        "bluetoothVersion": "v2",
        "gsmStandart": "gsm2.99",
        "navigation": "gps glonass",
        "wiFiVersion": "wifi2.0",
        "ram": 4,
        "memoryPhone": 64,
        "slotMemoryCard": 128,
        "numberOfProcessorCores": 4,
        "batteryCapacity": 4,
        "batteryType": "LiPol",
        "fastCharging": true,
        "frontalCamera": 8,
        "mainCamera": 25,
        "diagonal": 17.5,
        "screenResolution": "137",
        "webcamera": false,
        "cashMemory": 12
    });

    const handleChange = event => {
        let optionLabel = event.nativeEvent.target.selectedOptions;
        if (optionLabel !== undefined) {
            if (optionLabel[0].attributes[1] !== undefined) {
                this.setState({
                    [event.target.name]: optionLabel[0].attributes[1].value
                });
            } else {
                this.setState({
                    [event.target.name]: ""
                });
            }
        } else {
            this.setState({
                [event.target.name]: event.target.value
            });
        }
    };

    const clearState = () => {
        setState({
            category_id: "",
            title: ""
        });
    }

    const submit = event => {
        event.preventDefault();
        // let categoryId = parseInt(this.state.category_id);
        // categoryId++;
        // let formattedState = {
        //     category_id: categoryId,
        //     title: this.state.title
        // };
        props.createProductDetails(state);
    };
        return (
            <div className="flex justify-center">
                {props.products.map((item, index) => (
                        <RecipeReviewCard
                            key={index}
                            productsIsLoaded={props.productsIsLoaded}
                            data={item}
                        />
                ))}
                <form onSubmit={submit}>
                    <h1>Добавить тип характеристики</h1>
                    <TextField
                        id="outlined-email-input-01"
                        label="Имя категории"
                        type="text"
                        variant="outlined"
                        value={state.title}
                        onChange={handleChange}
                        size="small"
                        name="title"
                    />
                    <br />
                    <br />
                    <div className="grid grid-cols-1">
                        <h5
                            className="text-blue-800"
                            id="requestSuccessInfo"
                        ></h5>
                        <h5 className="text-red-800" id="requestErrorInfo"></h5>
                    </div>
                    <input
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    />
                </form>
            </div>
        );
}

export default AddCharacteristics;
