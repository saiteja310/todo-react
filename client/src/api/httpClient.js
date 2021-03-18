import axios from 'axios'

/**
 * Encapsulating a Http Client using Axios. 
 * Middleware actions can be further added.
 */

const ENV_URL = ''

const postMethod = (url = '', data = '', config = {}) => {
    return axios.post(ENV_URL + url, data, config)
}

const getMethod = (url) => {
    return axios(ENV_URL + url)
}

const putMethod = (url = '', data = '', config = {}) => {
    return axios.put(ENV_URL + url, data, config)
}

const deleteMethod = (url = '', config = {}) => {
    return axios.delete(ENV_URL + url, config)
}

const HttpClient = {
    post: postMethod,
    get: getMethod,
    put: putMethod,
    delete: deleteMethod
}

export { HttpClient }