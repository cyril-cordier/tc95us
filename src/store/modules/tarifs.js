const token = window.localStorage.getItem('token') || "";
var url = `https://tc95us.herokuapp.com`;
const axios = require('axios');

const newurl = process.env.VUE_APP_API_URL + `/classes/tarifs`;
let headers = { 
  'X-Parse-Application-Id': process.env.VUE_APP_APPLICATION_ID, 
  'X-Parse-REST-API-Key': process.env.VUE_APP_REST_API_KEY,
  'X-Parse-Session-Token': window.localStorage.getItem('session-token') || "",
  'X-Parse-Javascript-Key': process.env.VUE_APP_JAVASCRIPT_KEY,
  'Content-Type': 'application/json'
}
if (window.localStorage.getItem('session-token')) {
  headers['X-Parse-Session-Token']= window.localStorage.getItem('session-token')
}

const state = {
    tarifmessage:[],
    updatetarifmessage:[],
    tarif:[],
    tarifs:[],
    tarifById:[],
    deleteTarifById:[],

   

}

const getters = {
  getTarifMessage:(state) =>(state.tarifmessage),
  getUpdateTarifMessage:(state)=>(state.updatetarifmessage), 
  getTarif:(state) =>(state.tarif),
  infoTarifById:(state) =>(state.TarifById),
  getAllTarifs:(state)=> (state.tarifs),
}

const actions = {
   
    // CREATE
    async createTarif({commit},form){

      const body = {
        "type": form.type,
        "category": form.category,
        "price1": form.price1,
        "price2": form.price2,
        "price3": form.price3,
        "details": form.details,
        "weight": form.weight,
      }
      
      var config = {
        method: 'post',
        url: `${newurl}`,
        headers: headers,
        data: body
      };

      axios(config)
          .then(result =>  {
                  commit('createTarifMessage',result)})
          .catch(function (error) {
            console.log(error);
          });
    },
    
    // EDIT
    async editTarif({commit},form){

      const body = {
        "type": form.type,
        "category": form.category,
        "price1": form.price1,
        "price2": form.price2,
        "price3": form.price3,
        "details": form.details,
        "weight": form.weight,
      }
      
      var config = {
        method: 'put',
        url: `${newurl}/${form.objectId}`,
        headers: headers,
        data: body
      };

      axios(config)
          .then(result =>  {
                  commit('updateTarifMessage',result)})
          .catch(function (error) {
            console.log(error);
          });


  },

   
      
// FETCH BY ID
    async fetchTarifById({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`${url}/api/tarifs/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('TarifById',result);

      })
      .catch(error => console.log('error', error));
          },

    // DELETE BY ID
    async deleteTarif({commit},id){
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);

      var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      
      redirect: 'follow'
      };

      fetch(`${url}/api/tarifs/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        commit('deleteTarifById',result);

      })
      .catch(error => console.log('error', error));
          },

      //FETCH ALL
    async fetchAllTarifs({commit}){
      var config = {
        method: 'get',
        url: newurl,
        headers: headers
      };
      
      axios(config)
      .then(response => response.data)
      .then(result => { 
        
        commit('fetchAllTarifs',result.results.sort((a, b) => b.weight - a.weight))
    })
      .catch(function (error) {
        console.log(error);
      });
    },

}
  

const mutations = {
createTarifMessage:(state,tarifmessage)=>(state.tarifmessage = tarifmessage),
updateTarifMessage:(state,updatetarifmessage)=>(state.updatetarifmessage = updatetarifmessage),
fetchTarif:(state,tarif) =>(state.tarif = tarif),
fetchAllTarifs:(state,tarifs)=>(state.tarifs = tarifs),
TarifById:(state,TarifById)=>(state.TarifById = TarifById),
deleteTarifById:(state,deletetarifById)=>(state.deleteTarifById = deletetarifById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}