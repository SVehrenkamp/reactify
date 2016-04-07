//actions
import actions from '../actions/actions';
const { api: {getProducts, getProduct, fetchData} } = actions;

//Stores
import store from '../stores';
//API Service
import axios from 'axios';

const PRODUCTS_URI = 'https://www.tgtappdata.com/v1/products/list?searchTerm=';
const PRODUCT_URI  = 'https://www.tgtappdata.com/v1/products/pdp/TCIN/';

module.exports = {
  getProducts(searchTerm) {
    store.dispatch(fetchData({isFetching: true}));
    axios.get(PRODUCTS_URI + searchTerm)
            .then( (response) => {
              store.dispatch(getProducts(response.data));
              store.dispatch(fetchData({isFetching:false}));
            })
            .catch( (error) => {
              console.error(error);
              store.dispatch(fetchData({isFetching:false}));
            });
  },
  getProduct(tcin) {
    store.dispatch(fetchData({isFetching:true}));
    axios.get(PRODUCT_URI+tcin)
            .then( (response) => {
              store.dispatch(getProduct(response.data));
              store.dispatch(fetchData({isFetching:false}));
            })
            .catch( (error) => {
              console.error(error);
              store.dispatch(fetchData({isFetching:false}));
            });
  }

};
