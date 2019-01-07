
import axios from 'axios'

const baseUrl = "http://localhost:8080/api/products";
const Api = {

    getAllProducts() {
        return axios.get(baseUrl)
    },
    getAllReviews(productId) {
        const url = `${baseUrl}/${productId}/reviews`;
        return axios.get(url)
    },
    addNewReview(productId, review) {
        const url = `${baseUrl}/${productId}/reviews`;
        return axios.post(url, review)
    }


};

export default Api;