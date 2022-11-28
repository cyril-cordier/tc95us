const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes/challengeusers`;
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
  challengeusermessage:[],
  updatechallengeusermessage:[],
  challengeuser:[],
  challengeusers:[],
  ChallengeuserById:[],
  deleteChallengeuserById:[],

 

}

const getters = {
  getChallengeuserMessage:(state) =>(state.challengeusermessage),
  getUpdateChallengeuserMessage:(state)=>(state.updatechallengeusermessage),
  getChallengeuser:(state) =>(state.challengeuser),
  infoChallengeuserById:(state) =>(state.ChallengeuserById),
  getAllChallengeusers:(state)=> (state.challengeusers),
}

const actions = {
   
    // CREATE
    async createChallengeuser({commit},form){
      const body = {
        "challengename": form.challengename,
        "contact": form.contact,
        "ranking": form.ranking,
        "points": form.points,
        "nbmatchs": form.nbmatchs,
        "matchaverage": form.matchaverage,
        "setaverage": form.setaverage,
        "gameaverage": form.gameaverage,
        "visible": form.visible,
        "year": form.year,
      }

      var config = {
        method: 'post',
        url: `${url}`,
        headers: headers,
        data: body
      };

      axios(config)
      .then(result => {
        commit('createChallengeuserMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
    
    // EDIT
    async editChallengeuser({commit},form){

      const body = {
        "challengename": form.challengename,
        "contact": form.contact,
        "ranking": form.ranking,
        "points": form.points,
        "nbmatchs": form.nbmatchs,
        "matchaverage": form.matchaverage,
        "setaverage": form.setaverage,
        "gameaverage": form.gameaverage,
        "visible": form.visible,
        "year": form.year,
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
          commit('updateChallengeuserMessage', result)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
   
      
// FETCH BY ID
    async fetchChallengeuserById({commit},objectId){

      var config = {
        method: 'get',
        url: `${url}/${objectId}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.data)
        .then(result => {
          commit('ChallengeuserById', result)
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // DELETE BY ID
    async deleteChallengeuser({commit},objectId){

      var config = {
        method: 'delete',
        url: `${url}/${objectId}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.json())
        .then(result => {
          commit('deleteChallengeuserById', result);
  
        })
        .catch(function (error) {
          console.log(error);
        });
    },

        //FETCH ALL
     async fetchAllChallengeusers({commit}){

      var config = {
        method: 'get',
        url: `${url}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.data)
        .then(result => { commit('fetchAllChallengeusers', result.results.sort((a, b) => b.points - a.points)) })
        .catch(function (error) {
          console.log(error);
        });
    }

  }
  

    const mutations = {
      createChallengeuserMessage:(state,challengeusermessage)=>(state.challengeusermessage = challengeusermessage),
      updateChallengeuserMessage:(state,updatechallengeusermessage)=>(state.updatechallengeusermessage = updatechallengeusermessage),
      fetchChallengeuser:(state,challengeuser) =>(state.challengeuser = challengeuser),
      fetchAllChallengeusers:(state,challengeusers)=>(state.challengeusers = challengeusers),
      ChallengeuserById:(state,ChallengeuserById)=>(state.ChallengeuserById = ChallengeuserById),
      deleteChallengeuserById:(state,deleteChallengeuserById)=>(state.deleteChallengeuserById = deleteChallengeuserById),
      
      }

export default{
    state,
    getters,
    actions,
    mutations,
}