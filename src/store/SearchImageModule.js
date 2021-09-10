import authUrls from '../Auth/authUrls'
console.log(authUrls)
export default {


    state: {
        searchValue: "",
        searchResult: {},
        // id: "",
        clickedImage: "",
        randomImage: "",
        userPortfolioImages: {}
        
    },
    mutations: {
        SET_SEARCH_VALUE(state, value) {
            state.searchValue = value
        },
        SET_SEARCH_RESULT(state,value) {
            state.searchResult = value
            
        },
        // SET_IMAGE_ID(state,value){
        //     console.log(state.id)
        //     state.id =value
        // },
        SET_CLICKED_IMAGE(state,value){
            state.clickedImage= value
            console.log(state.clickedImage)

        },
        SET_RANDOM_IMAGE(state,value){
            state.randomImage=value
        },
        SET_USER_PORTFOLIO_IMAGES(state,value){
            state.userPortfolioImages=value
            console.log(state.userPortfolioImages)
        }
        
    },
    getters: {
        getSearchValue(state){
            return state.searchValue
        },
        getSearchResult(state){
            return state.searchResult
        },
        // getImageID(state){
        //     return state.id
            
        // },
        getClickedImage(state){
            return state.clickedImage
        },
        getRandomImage(state){
            return state.randomImage
        },
        getUserPortfolioImages(state){
            return state.userPortfolioImages
        }
        
        
    },
    actions: {
        userSearchValue({commit},searchValue) {
            commit('SET_SEARCH_VALUE',searchValue)
        },

        fetchSearchResult({commit}, queryValue){
            
            fetch(authUrls.searchUrl(queryValue))
                .then(response => response.json())
                .then(data => { commit('SET_SEARCH_RESULT',data.results) })
                .catch(error => console.log(error.message))
        },

        // fetchImageID({commit},id) 
        // {
        //     commit('SET_IMAGE_ID',id)
        // },

        fetchClickedImage({commit},{id,success}){
            console.log(id)
            console.log(success)
            fetch(authUrls.viewImageUrl(id))
            .then(response => response.json())
            .then(data => { commit('SET_CLICKED_IMAGE',data);
            success()})
            
            .catch(error => console.log(error.message))
   
        },
        fetchRandomImage({commit}){
            fetch(authUrls.randomImageUrl())
            .then(response=> response.json())
            .then(data=> { commit('SET_RANDOM_IMAGE',data.urls.full)})
            .catch(error => console.log(error.message))
          
        
    },
    fetchUserPortfolioImages({commit},userName){
        console.log(authUrls.userPortfolioImagesUrl(userName))
        fetch(authUrls.userPortfolioImagesUrl(userName))
        .then(response => response.json())
        .then(data=>{commit('SET_USER_PORTFOLIO_IMAGES',data)})
        .catch(error => console.log(error.message))
    }
},

    namespaced: true

}
