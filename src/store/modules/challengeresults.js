const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes/challengeresults`;
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
    challengeresultmessage:[],
    updatechallengeresultmessage:[],
    challengeresult:[],
    challengeresults:[],
    ChallengeresultById:[],
    deleteChallengeresultById:[],
}

const getters = {
    getChallengeresultMessage:(state) =>(state.challengeresultmessage),
    getUpdateChallengeresultMessage:(state)=>(state.updatechallengeresultmessage),
    getChallengeresult:(state) =>(state.challengeresult),
    infoChallengeresultById:(state) =>(state.ChallengeresultById),
    getAllChallengeresults:(state)=> (state.challengeresults),
}

const actions = {
   
    // CREATE
    async createChallengeresult({commit},form){
      const body = {
        "winner": form.winner,
        "looser": form.looser,
        "S1W": Number(form.S1W),
        "S1L": Number(form.S1L),
        "S2W": Number(form.S2W),
        "S2L": Number(form.S2L),
        "S3W": Number(form.S3W),
        "S3L": Number(form.S3L),
        "pointsW": Number(form.pointsW),
        "pointsL": Number(form.pointsL),
        "details": form.details,
        "date": form.date,
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
        commit('createChallengeresultMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },
    
    // EDIT
    async editChallengeresult({commit},form){

      const body = {
        "winner": form.winner,
        "looser": form.looser,
        "S1W": Number(form.S1W),
        "S1L": Number(form.S1L),
        "S2W": Number(form.S2W),
        "S2L": Number(form.S2L),
        "S3W": Number(form.S3W),
        "S3L": Number(form.S3L),
        "pointsW": Number(form.pointsW),
        "pointsL": Number(form.pointsL),
        "details": form.details,
        "date": form.date,
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
          commit('updateChallengeresultMessage', result)
        })
        .catch(function (error) {
          console.log(error);
        });
    },
   
      
// FETCH BY ID
    async fetchChallengeresultById({commit},objectId){

      var config = {
        method: 'get',
        url: `${url}/${objectId}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.data)
        .then(result => {
          commit('ChallengeresultById', result)
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // DELETE BY ID
    async deleteChallengeresult({commit},objectId){

      var config = {
        method: 'delete',
        url: `${url}/${objectId}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.json())
        .then(result => {
          commit('deleteChallengeresultById', result);
  
        })
        .catch(function (error) {
          console.log(error);
        });
    },

        //FETCH ALL
     async fetchAllChallengeresults({commit}){

      var config = {
        method: 'get',
        url: `${url}`,
        headers: headers
      };
  
      axios(config)
        .then(response => response.data)
        .then(result => { commit('fetchAllChallengeresults', result.results.sort((a, b) => b.date - a.date)) })
        .catch(function (error) {
          console.log(error);
        });
    }

    }
  

const mutations = {
createChallengeresultMessage:(state,challengeresultmessage)=>(state.challengeresultmessage = challengeresultmessage),
updateChallengeresultMessage:(state,updatechallengeresultmessage)=>(state.updatechallengeresultmessage = updatechallengeresultmessage),
fetchChallengeresult:(state,challengeresult) =>(state.challengeresult = challengeresult),
fetchAllChallengeresults:(state,challengeresults)=>(state.challengeresults = challengeresults),
ChallengeresultById:(state,ChallengeresultById)=>(state.ChallengeresultById = ChallengeresultById),
deleteChallengeresultById:(state,deleteChallengeresultById)=>(state.deleteChallengeresultById = deleteChallengeresultById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}