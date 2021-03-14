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
        return async dispatch => {
            let response = await instance.post("products", product);
            if (response.data) {
                  dispatch(this.getProducts());
                  document.getElementById("requestSuccessInfo").innerText =
                      "Продукт успешно создан!";
            }
            if (response.message) {
                     document.getElementById("requestErrorInfo").innerText =
                         "Произошла ошибка!";
                 }
        };
    },

    getProducts() {
        return async dispatch => {
            let response = await instance.get("products", {
                onDownloadProgress: function(event) {
                    let progress = Math.round((event.loaded * 100) / event.total);
                }
            });
            if (response.data) {
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

// axios.get(
//     "https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate",
//     {
//         onDownloadProgress: progressEvent => {
//             let percentCompleted = Math.round(
//                 (progressEvent.loaded * 100) / progressEvent.total
//             );
//             console.log(progressEvent.lengthComputable);
//             console.log(percentCompleted);
//         }
//     }
// );
