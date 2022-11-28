const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes/products`;
let headers = {
  'X-Parse-Application-Id': process.env.VUE_APP_APPLICATION_ID,
  'X-Parse-REST-API-Key': process.env.VUE_APP_REST_API_KEY,
  'X-Parse-Session-Token': window.localStorage.getItem('session-token') || "",
  'X-Parse-Javascript-Key': process.env.VUE_APP_JAVASCRIPT_KEY,
  'Content-Type': 'application/json'
}
if (window.localStorage.getItem('session-token')) {
  headers['X-Parse-Session-Token'] = window.localStorage.getItem('session-token')
}

const state = {
  productmessage:[],
  updateproductmessage:[],
  product:[],
  products:[],
  ProductById:[],
  deleteProductById:[],
}

const getters = {
  getProductMessage:(state) =>(state.productmessage),
  getUpdateProductMessage:(state)=>(state.updateproductmessage),
  getProduct:(state) =>(state.product),
  infoProductById:(state) =>(state.ProductById),
  getAllProducts:(state)=> (state.products),
}

const actions = {

  // CREATE
  async createProduct({ commit }, form) {

    const body = {
      name: form.name,
      details: form.details,
      price: form.price,
      image: form.image,
      weight: Number(form.weight),
    }

    var config = {
      method: 'post',
      url: `${url}`,
      headers: headers,
      data: body
    };

    axios(config)
      .then(result => {
        commit('createProductMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // EDIT
  async editProduct({ commit }, form) {
    const body = {
      name: form.name,
      details: form.details,
      price: form.price,
      image: form.image,
      weight: Number(form.weight),
    }

    var config = {
      method: 'put',
      url: `${url}/${form.objectId}`,
      headers: headers,
      data: body
    };

    axios(config)
      .then(result => {
        commit('updateProductMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // FETCH BY ID
  async fetchProductById({ commit }, id) {
    var config = {
      method: 'get',
      url: `${url}/${id}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('ProductById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // DELETE BY ID
  async deleteProduct({ commit }, id) {
    var config = {
      method: 'delete',
      url: `${url}/${id}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('deleteProductById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  //FETCH ALL
  async fetchAllProducts({ commit }) {
    var config = {
      method: 'get',
      url: url,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {

        commit('fetchAllProducts', result.results.sort((a, b) => b.weight - a.weight))
      })
      .catch(function (error) {
        console.log(error);
      });
  },

}

const mutations = {
  createProductMessage:(state,productmessage)=>(state.productmessage = productmessage),
  updateProductMessage:(state,updateproductmessage)=>(state.updateproductmessage = updateproductmessage),
  fetchProduct:(state,product) =>(state.product = product),
  fetchAllProducts:(state,products)=>(state.products = products),
  ProductById:(state,ProductById)=>(state.ProductById = ProductById),
  deleteProductById:(state,deleteProductById)=>(state.deleteProductById = deleteProductById),  
}

export default {
  state,
  getters,
  actions,
  mutations,
}