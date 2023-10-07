import config from './config'

const ENDPOINT = {
  GET_ALL_RESTAURANTS: `${config.API_BASE_URL}/list`,
  GET_DETAIL_RESTAURANT_BY_ID: (id) => `${config.API_BASE_URL}/detail/${id}`,
  GET_SEARCH_RESTAURANTS: (query) => `${config.API_BASE_URL}/search?q=${query}`,
  POST_REVIEW: `${config.API_BASE_URL}/review`
}

export default ENDPOINT
