import instance from './instance';

const setProducts = product => ({
    type: "ADD_PRODUCTS_SUCCESS",
    payload: product
});

export const productsDetailsAPI = {
           createProductDetails(productDetails) {
               return async dispatch => {
                   try {
                       let res = await instance.post(
                           "products_details",
                           productDetails
                       );
                       if (res.data) {
                           console.log(res.data)
                        //    dispatch(this.getProducts());
                        //    document.getElementById(
                        //        "requestSuccessInfo"
                        //    ).innerText = "Продукт успешно создан!";
                       }
                   } catch (e) {
                       console.log(e)
                   }
               };
           },
           getProductDetail(id) {
               return async dispatch => {
                   let response = await instance.get(`product_detail/${id}`);
                   if (response.data) {
                       return response.data;
                    //    console.log(response.data)
                       // dispatch(setProducts(response.data));
                   }
                   if (response.data.errors) {
                       console.log(data.errors);
                   } else {
                   }
               };
           },
           getProducts() {
               return async dispatch => {
                   let response = await instance.get("products", {
                       // onDownloadProgress: function(event) {
                       //     let progress = Math.round((event.loaded * 100) / event.total);
                       // }
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
                   let response = await instance.delete(
                       `products/${productId}`
                   );
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
