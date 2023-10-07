import FavoriteRestaurantQuery from '../../data/favorite-restaurant-idb'
import scrollToView from '../../utils/scrollToView'

const Favorite = {
  async render () {
    return `
    <h1 id="mainContent" class="favorite-title" tabindex="0">Your favorite restaurants</h1>
    <div class="list-wrapper" id="listWrapper">

    </div>
    `
  },

  async afterRender () {
    const listWrapper = document.querySelector('#listWrapper')
    const main = document.querySelector('#main')
    const favoriteRestaurants = await FavoriteRestaurantQuery.getAllFavoriteRestaurants()

    if (favoriteRestaurants.length === 0) {
      const noFavoriteRestaurantElement = document.createElement('no-favorite')
      main.innerHTML = ''
      main.appendChild(noFavoriteRestaurantElement)
    } else {
      favoriteRestaurants.forEach((f) => {
        const restaurantCardElement = document.createElement('restaurant-card')
        restaurantCardElement.restaurant = f
        listWrapper.appendChild(restaurantCardElement)
      })
    }

    scrollToView('mainContent')
  }
}

export default Favorite
