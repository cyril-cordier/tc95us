const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes/office`;
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
  officeusermessage: [],
  updateofficeusermessage: [],
  officeuser: [],
  officeusers: [],
  OfficeuserById: [],
  deleteOfficeuserById: [],
}

const getters = {
  getOfficeuserMessage: (state) => (state.officeusermessage),
  getUpdateOfficeuserMessage: (state) => (state.updateofficeusermessage),
  getOfficeuser: (state) => (state.officeuser),
  infoOfficeuserById: (state) => (state.OfficeuserById),
  getAllOfficeusers: (state) => (state.officeusers),
}

const actions = {

  // CREATE
  async createOfficeuser({ commit }, form) {

    const body = {
      name: form.name,
      function: form.function,
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
        commit('createOfficeuserMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // EDIT
  async editOfficeuser({ commit }, form) {
    const body = {
      name: form.name,
      function: form.function,
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
        commit('updateOfficeuserMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // FETCH BY ID
  async fetchOfficeuserById({ commit }, id) {
    var config = {
      method: 'get',
      url: `${url}/${id}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('OfficeuserById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // DELETE BY ID
  async deleteOfficeuser({ commit }, id) {
    var config = {
      method: 'delete',
      url: `${url}/${id}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('deleteOfficeuserById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  //FETCH ALL
  async fetchAllOfficeusers({ commit }) {
    var config = {
      method: 'get',
      url: url,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {

        commit('fetchAllOfficeusers', result.results.sort((a, b) => b.weight - a.weight))
      })
      .catch(function (error) {
        console.log(error);
      });
  },

}

const mutations = {
  createOfficeuserMessage: (state, officeusermessage) => (state.officeusermessage = officeusermessage),
  updateOfficeuserMessage: (state, updateofficeusermessage) => (state.updateofficeusermessage = updateofficeusermessage),
  fetchOfficeuser: (state, officeuser) => (state.officeuser = officeuser),
  fetchAllOfficeusers: (state, officeusers) => (state.officeusers = officeusers),
  OfficeuserById: (state, OfficeuserById) => (state.OfficeuserById = OfficeuserById),
  deleteOfficeuserById: (state, deleteOfficeuserById) => (state.deleteOfficeuserById = deleteOfficeuserById),
}

export default {
  state,
  getters,
  actions,
  mutations,
}