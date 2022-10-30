const axios = require('axios');

const url = process.env.VUE_APP_API_URL + `/classes`;
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
    contentmessage:[],
    updatecontentmessage:[],
    content:[],
    contents:[],
    ContentById:[],
    deleteContentById:[],

   

}

const getters = {
    getContentMessage:(state) =>(state.contentmessage),
    getUpdateContentMessage:(state)=>(state.updatecontentmessage),
    getContent:(state) =>(state.content),
    infoContentById:(state) =>(state.ContentById),
    getAllContents:(state)=> (state.contents),
}

const actions = {
   
    // CREATE contents
    async createContent({commit},form){
      
        const body = {
          "title": form.title,
          "content": form.content,
          "name": form.name,
          "fonction": form.fonction,
          "image": form.image,
          "weight": form.weight,
        }
        
        var config = {
          method: 'post',
          url: `${url}/contents`,
          headers: headers,
          data: body
        };

        axios(config)
            .then(response => response.json())
            .then(result =>  {
                    commit('createContentMessage',result)})
            .catch(function (error) {
              console.log(error);
            });
    },
    
    // EDIT
    async editContent({commit},form){
    console.log("🚀 ~ file: contents.js ~ line 67 ~ editContent ~ form", form)

      const body = {
        "title": form.title,
        "content": form.content,
        "name": form.name,
        "fonction": form.fonction,
        "image": form.image,
        "weight": form.weight,
      }
      
      var config = {
        method: 'put',
        url: `${url}/contents/${form.objectId}`,
        headers: headers,
        data: body
      };

      axios(config)
          .then(response => response.json())
          .then(result =>  {
                  commit('createContentMessage',result)})
          .catch(function (error) {
            console.log(error);
          });
  },

   
      
// FETCH BY ID
    // async fetchContentById({commit},id){
    
      // var config = {
      //   method: 'get',
      //   url: `${url}/contents`,
      //   headers: headers,
      //   data: body
      // };

      // axios(config)
      //     .then(response => response.json())
      //     .then(result =>  {
      //             commit('createContentMessage',result)})
      //     .catch(function (error) {
      //       console.log(error);
      //     });


      //             var myHeaders = new Headers();
      //             myHeaders.append("Authorization", `Bearer ${token}`);
      
      //             var requestOptions = {
      //             method: 'GET',
      //             headers: myHeaders,
                  
      //             redirect: 'follow'
      //             };
      
      //             fetch(`${url}/contents/${id}`, requestOptions)
      //             .then(response => response.json())
      //             .then(result => {
      //               commit('ContentById',result);
    
      //             })
      //             .catch(error => console.log('error', error));
                      // },

    // DELETE BY ID
    async deleteContent({commit},objectId){

      var config = {
        method: 'delete',
        url: `${url}/contents/${objectId}`,
        headers: headers
      };
      
      axios(config)
      .then(response => response.json())
      .then(result => {
          commit('deleteContentById',result);
  
        })
      .catch(function (error) {
        console.log(error);
      });
          },

        //FETCH ALL
     async fetchAllContents({commit}){
            
            var config = {
              method: 'get',
              url: 'https://parseapi.back4app.com/classes/contents',
              headers: headers
            };
            
            axios(config)
            .then(response => response.data)
            .then(result => {console.log(result.results); commit('fetchAllContents',result.results.sort((a, b) => b.description - a.description))})
            .catch(function (error) {
              console.log(error);
            });
    }
  }
  

const mutations = {
createContentMessage:(state,contentmessage)=>(state.contentmessage = contentmessage),
updateContentMessage:(state,updatecontentmessage)=>(state.updatecontentmessage = updatecontentmessage),
fetchContent:(state,content) =>(state.content = content),
fetchAllContents:(state,contents)=>(state.contents = contents),
ContentById:(state,ContentById)=>(state.ContentById = ContentById),
deleteContentById:(state,deleteContentById)=>(state.deleteContentById = deleteContentById),

}



export default{
    state,
    getters,
    actions,
    mutations,
}