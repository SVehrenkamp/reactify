//actions
import FETCH_DATA from '../actions/api/FETCH_DATA';
//Stores
import store from '../stores';
//API Service
import axios from 'axios';

const PRODUCTS_URI = 'https://www.tgtappdata.com/v1/products/list?searchTerm=shirts';
const PRODUCT_URI  = 'https://www.tgtappdata.com/v1/products/pdp/TCIN/';
module.exports = {
  getProducts() {
    console.log('CALLING GET PRODUCTS');
    return axios.get(PRODUCTS_URI)
            .then( (response) => {
              console.log(response);
              store.dispatch({
                type: 'GET_PRODUCTS',
                data: response.data
              });

            })
            .catch( (error) => {
              console.log(error);
            });
  },
  getProduct(tcin) {
    console.log('CALLING GET PRODUCTS');
    return axios.get(PRODUCT_URI+tcin)
            .then( (response) => {
              console.log(response);
              store.dispatch({
                type: 'GET_PRODUCT',
                data: response.data
              });

            })
            .catch( (error) => {
              console.log(error);
            });
  }

};
