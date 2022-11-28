const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/users`;
const api_url = process.env.VUE_APP_API_URL;
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
    message:[],
    createmessage:[],
    messageLogin:[],
    user:[],
    users:[],
    UserById:[],
    deleteUserById:[],
}

const getters = {
    getMessage:(state) =>(state.message),
    getUpdateMessage:(state)=>(state.updatemessage),
    getCreateMessage:(state)=>(state.createmessage),
    getLogin:(state) => (state.messageLogin),
    getUser:(state) =>(state.user),
    infoUserById:(state) =>(state.UserById),
    getAllUsers:(state)=> (state.users),
    deleteUserById:(state)=>(state.deleteUserById),
}

const actions = {

  // CREATE
  async registerForm({ commit }, form) {

    const body = {
      username: form.username,
      lastname: form.lastname,
      firstname: form.firstname,
      email: form.email,
      admin: form.admin,
      challengename: form.challengename,
      password: form.password,
    }

    var config = {
      method: 'post',
      url: `${url}`,
      headers: headers,
      data: body
    };

    axios(config)
      .then(result => {
        commit('createMessage', result)
        window.location.href="/MonCompte";
      })
      .catch(function (error) {
        console.log(error);
      });
  },

    // LOGIN
  async loginForm({commit},obj){

    var config = {
      method: 'get',
      url: `${api_url}/login?username=${obj.username}&password=${obj.password}`,
      headers: headers,
    };

    axios(config)
        .then(result =>  {
          console.log("🚀 ~ file: users.js ~ line 109 ~ loginForm ~ result", result.error)
              window.localStorage.setItem('session-token',result.data.sessionToken);
              commit('loginMessage',result);
            if(!result.error){
              window.location.href="/admin";
            }
        })
        .catch((error) => {
          commit('loginMessage',{error: 'Identifiant ou mot de passe invalide'});

          console.log(error);
        });      
  },

  // EDIT
  async editForm({ commit }, form) {
    const body = {
      username: form.username,
      lastname: form.lastname,
      firstname: form.firstname,
      email: form.email,
      admin: form.admin,
      challengename: form.challengename,
      password: form.password,
    }

    var config = {
      method: 'put',
      url: `${url}/${form.objectId}`,
      headers: headers,
      data: body
    };

    axios(config)
      .then(result => {
        commit('updateMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // FETCH USER ME
  async fetchUser({ commit }) {
    
    var config = {
      method: 'get',
      url: `${url}/me`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('fetchUser', [result])
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // FETCH BY ID
  async fetchUserById({ commit }, id) {
    var config = {
      method: 'get',
      url: `${url}/${id}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('UserById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // DELETE BY ID
  async deleteUser({ commit }, id) {
    var config = {
      method: 'delete',
      url: `${url}/${id}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('deleteUserById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  //FETCH ALL
  async fetchAllUsers({ commit }) {
    var config = {
      method: 'get',
      url: url,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {

        commit('fetchAllUsers', result.results.sort((a, b) => b.weight - a.weight))
      })
      .catch(function (error) {
        console.log(error);
      });
  },

}

const mutations = {
  createMessage:(state,createmessage)=>(state.createmessage = createmessage),
  registerMessage:(state,message)=>(state.message = message),
  updateMessage:(state,updatemessage)=>(state.updatemessage = updatemessage),
  loginMessage:(state,messageLogin) =>(state.messageLogin = messageLogin),
  fetchUser:(state,user) =>(state.user = user),
  fetchAllUsers:(state,users)=>(state.users = users),
  fetchTeamById:(state,teamById) => (state.teamById = teamById),
  UserById:(state,UserById)=>(state.UserById = UserById),
  deleteUserById:(state,deleteUserById)=>(state.deleteUserById = deleteUserById),
  }

export default {
  state,
  getters,
  actions,
  mutations,
}
