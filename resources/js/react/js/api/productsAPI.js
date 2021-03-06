import * as axios from "axios";

let url = "";

if (process.env.MIX_API_URL === "local") {
    url = "http://localhost:8000";
} else {
    url = "https://laravel-react-eshop.herokuapp.com";
}
console.log(url);

const instance = axios.create({
    baseURL: `${url}/api`,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});

const setProducts = product => ({
    type: "ADD_PRODUCTS_SUCCESS",
    payload: product
});

export const productsAPI = {
    createProduct(product) {
        debugger
        return async dispatch => {
            let response = await instance.post("products", product);
            if (response.data.product) {
                dispatch(setProducts(response.data));
                window.history.go(-1);
            }
        };
    },

    getProducts() {
        return async dispatch => {
            let response = await instance.get("products");
            if (response.status === 200) {
                dispatch(setProducts(response.data));
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
            }
        };
    },

    updateProduct(product) {
        return async dispatch => {
            let response = await instance.put("products", {
                params: product
            });
            if (response.status === 200) {
                dispatch(this.getProducts());
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
                // myData.clientError(response.data);
            }
        };
    },

    deleteProduct(productId) {
        return async dispatch => {
            let response = await instance.delete(`products/${productId}`);
            if (response.status === 200) {
                dispatch(this.getProducts());
            }
            if (response.data.errors) {
                console.log(data.errors);
            } else {
                // myData.clientError(response.data);
            }
        };
    }
};
