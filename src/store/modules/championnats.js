const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes/championnats`;
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
  championnatmessage:[],
  updatechampionnatmessage:[],
  championnat:[],
  championnats:[],
  ChampionnatById:[],
  deleteChampionnatById:[],
}

const getters = {
  getChampionnatMessage:(state) =>(state.championnatmessage),
  getUpdateChampionnatMessage:(state)=>(state.updatechampionnatmessage),
  getChampionnat:(state) =>(state.championnat),
  infoChampionnatById:(state) =>(state.ChampionnatById),
  getAllChampionnats:(state)=> (state.championnats),
}

const actions = {
   
    // CREATE
    async createChampionnat({commit},form){
      const body = {
        "date": form.date,
        "competition": form.competition,
        "match": form.match,
        "score": form.score,
        "weight": form.weight,
      }

      var config = {
        method: 'post',
        url: `${url}`,
        headers: headers,
        data: body
      };

      axios(config)
      .then(result => {
        commit('createChampionnatMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
    
    // EDIT
    async editChampionnat({commit},form){

      const body = {
        "date": form.date,
        "competition": form.competition,
        "match": form.match,
        "score": form.score,
        "weight": form.weight,
      }
  
      var config = {
        method: 'put',
        url: `${url}/${form.objectId}`,
        headers: headers,
        data: body
      };
  
      axios(config)
        .then(response => response.json())
        .then(result => {
          commit('updateChampionnatMessage', result)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
   
      
// FETCH BY ID
    async fetchChampionnatById({commit},objectId){

      var config = {
        method: 'get',
        url: `${url}/${objectId}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.data)
        .then(result => {
          commit('ChampionnatById', result)
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // DELETE BY ID
    async deleteChampionnat({commit},objectId){

      var config = {
        method: 'delete',
        url: `${url}/${objectId}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.json())
        .then(result => {
          commit('deleteChampionnatById', result);
  
        })
        .catch(function (error) {
          console.log(error);
        });
    },

        //FETCH ALL
     async fetchAllChampionnats({commit}){

      var config = {
        method: 'get',
        url: `${url}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.data)
        .then(result => { commit('fetchAllChampionnats', result.results.sort((a, b) => b.weight - a.weight)) })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  
const mutations = {
  createChampionnatMessage:(state,championnatmessage)=>(state.championnatmessage = championnatmessage),
  updateChampionnatMessage:(state,updatechampionnatmessage)=>(state.updatechampionnatmessage = updatechampionnatmessage),
  fetchChampionnat:(state,championnat) =>(state.championnat = championnat),
  fetchAllChampionnats:(state,championnats)=>(state.championnats = championnats),
  ChampionnatById:(state,ChampionnatById)=>(state.ChampionnatById = ChampionnatById),
  deleteChampionnatById:(state,deleteChampionnatById)=>(state.deleteChampionnatById = deleteChampionnatById),
}

export default{
    state,
    getters,
    actions,
    mutations,
}