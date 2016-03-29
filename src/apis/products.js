//actions
import FETCH_DATA from '../actions/api/FETCH_DATA';
//Stores
import store from '../stores';
//API Service
import axios from 'axios';

const PRODUCTS_URI = 'https://www.tgtappdata.com/v1/products/list?searchTerm=';
const PRODUCT_URI  = 'https://www.tgtappdata.com/v1/products/pdp/TCIN/';
module.exports = {
  getProducts(searchTerm) {
    store.dispatch({
      type: 'FETCHING_DATA',
      data: true
    });
    return axios.get(PRODUCTS_URI + searchTerm)
            .then( (response) => {
              store.dispatch({
                type: 'GET_PRODUCTS',
                data: response.data
              });
              store.dispatch({
                type: 'FETCHING_DATA',
                data: false
              });
            })
            .catch( (error) => {
              console.log(error);
              store.dispatch({
                type: 'FETCHING_DATA',
                data: false
              });
            });
  },
  getProduct(tcin) {
    return axios.get(PRODUCT_URI+tcin)
            .then( (response) => {
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
