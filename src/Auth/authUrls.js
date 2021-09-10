

const CLIENT_ID = 'tWLP2uodBM7R0QYTSM-Qjgzuc_OegqJENuJHp7UuvKg'
const API_ROOT_PATH = 'https://api.unsplash.com/'

export default {

searchUrl(searchValue) {
return `${API_ROOT_PATH}search/photos?page=1&per_page=30&query=${searchValue}&client_id=${CLIENT_ID}`
},

viewImageUrl(id) {
    return `${API_ROOT_PATH}photos/${id}?client_id=${CLIENT_ID}`
},

randomImageUrl(){
    return `${API_ROOT_PATH}photos/random?client_id=${CLIENT_ID}`
   
},
userPortfolioImagesUrl(userName){
    return `${API_ROOT_PATH}users/${userName}/photos?client_id=${CLIENT_ID}`
}
}