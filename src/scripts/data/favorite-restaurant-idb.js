import { openDB } from 'idb'
import config from '../global/config'

const dbPromise = openDB(config.DATABASE.NAME, 1, {
  upgrade (database) {
    database.createObjectStore(config.DATABASE.OBJECT_STORE_FAVORITE, {
      keyPath: 'id'
    })
  }
})

const FavoriteRestaurantQuery = {
  async getFavoriteRestaurant (id) {
    return (await dbPromise).get(config.DATABASE.OBJECT_STORE_FAVORITE, id)
  },
  async getAllFavoriteRestaurants () {
    return (await dbPromise).getAll(config.DATABASE.OBJECT_STORE_FAVORITE)
  },
  async putFavoriteRestaurant (restaurant) {
    try {
      if (!restaurant.id) throw new Error('Parameter for restaurant is not correct')

      return (await dbPromise).add(config.DATABASE.OBJECT_STORE_FAVORITE, restaurant)
    } catch (error) {
      console.log(error.message)
    }
  },
  async deleteFavoriteRestaurant (id) {
    return (await dbPromise).delete(config.DATABASE.OBJECT_STORE_FAVORITE, id)
  }
}

export default FavoriteRestaurantQuery
