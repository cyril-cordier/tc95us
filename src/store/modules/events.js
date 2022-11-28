const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes/events`;
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
  eventmessage:[],
  updateeventmessage:[],
  event:[],
  events:[],
  eventById:[],
  deleteEventById:[],
}

const getters = {
  getEventMessage:(state) =>(state.eventmessage),
  getUpdateEventMessage:(state)=>(state.updateeventmessage), 
  getEvent:(state) =>(state.event),
  infoEventById:(state) =>(state.EventById),
  getAllEvents:(state)=> (state.events),
}

const actions = {

  // CREATE event
  async createEvent({ commit }, form) {

    const body = {
      title: form.title,
      details: form.details,
      place: form.place,
      date: form.date,
      hour: form.hour,
      price: form.price,
      image: form.image,
      image_name: form.image,
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
        commit('createEventMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // EDIT
  async editEvent({ commit }, form) {

    const body = {
      title: form.title,
      details: form.details.toString(),
      place: form.place,
      date: form.date,
      hour: form.hour,
      price: form.price,
      image: form.image,
      image_name: form.image,
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
        commit('updateEventMessage', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },



  // FETCH BY ID
  async fetchEventById({ commit }, objectId) {
    var config = {
      method: 'get',
      url: `${url}/${objectId}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => {
        commit('EventById', result)
      })
      .catch(function (error) {
        console.log(error);
      });
  },

  // DELETE BY ID
  async deleteEvent({ commit }, objectId) {

    var config = {
      method: 'delete',
      url: `${url}/${objectId}`,
      headers: headers
    };

    axios(config)
      .then(response => response.json())
      .then(result => {
        commit('deleteEventById', result);

      })
      .catch(function (error) {
        console.log(error);
      });
  },

  //FETCH ALL
  async fetchAllEvents({ commit }) {

    var config = {
      method: 'get',
      url: `${url}`,
      headers: headers
    };

    axios(config)
      .then(response => response.data)
      .then(result => { commit('fetchAllEvents', result.results.sort((a, b) => b.weight - a.weight)) })
      .catch(function (error) {
        console.log(error);
      });
  }
}

const mutations = {
  createEventMessage:(state,eventmessage)=>(state.eventmessage = eventmessage),
  updateEventMessage:(state,updateeventmessage)=>(state.updateeventmessage = updateeventmessage),
  fetchEvent:(state,event) =>(state.event = event),
  fetchAllEvents:(state,events)=>(state.events = events),
  EventById:(state,EventById)=>(state.EventById = EventById),
  deleteEventById:(state,deleteeventById)=>(state.deleteEventById = deleteeventById),
  
  }
  
  export default{
      state,
      getters,
      actions,
      mutations,
  }