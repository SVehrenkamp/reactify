//actions
import FETCH_DATA from '../actions/api/FETCH_DATA';
//Stores
import store from '../stores';
//API Service
import axios from 'axios';

const URI = 'https://www.tgtappdata.com/v1/products/list?searchTerm=shirts';

module.exports = {
  getProducts() {
    console.log('CALLING GET PRODUCTS');
    return axios.get(URI)
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
  }
};
