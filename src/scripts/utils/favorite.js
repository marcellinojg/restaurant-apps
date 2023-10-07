import FavoriteRestaurantQuery from '../data/favorite-restaurant-idb'

let _restaurant
let _favoriteButtonElement
let _favoriteButtonTextElement

const initializeFavoriteButton = async (
  restaurant,
  favoriteButtonElement,
  favoriteButtonTextElement
) => {
  _restaurant = restaurant
  _favoriteButtonElement = favoriteButtonElement
  _favoriteButtonTextElement = favoriteButtonTextElement
  const favoriteRestaurant = await FavoriteRestaurantQuery.getFavoriteRestaurant(
    restaurant.id
  )

  if (favoriteRestaurant) {
    favoriteButtonElement.addEventListener('click', removeFromFavorite)
    favoriteButtonTextElement.innerHTML = 'Remove from Favorites'
    favoriteButtonElement.ariaLabel = 'Remove restaurant from favorite'
  } else {
    favoriteButtonElement.addEventListener('click', addToFavorite)
    favoriteButtonTextElement.innerHTML = 'Add to Favorites'
    favoriteButtonElement.ariaLabel = 'Add restaurant to favorite'
  }
}

const addToFavorite = async () => {
  await FavoriteRestaurantQuery.putFavoriteRestaurant(_restaurant)
  _favoriteButtonElement.removeEventListener('click', addToFavorite)
  _favoriteButtonElement.addEventListener('click', removeFromFavorite)
  _favoriteButtonTextElement.innerHTML = 'Remove from Favorites'
  _favoriteButtonElement.ariaLabel = 'Remove restaurant from favorite'
}

const removeFromFavorite = async () => {
  await FavoriteRestaurantQuery.deleteFavoriteRestaurant(_restaurant.id)
  _favoriteButtonElement.removeEventListener('click', removeFromFavorite)
  _favoriteButtonElement.addEventListener('click', addToFavorite)
  _favoriteButtonTextElement.innerHTML = 'Add to Favorites'
  _favoriteButtonElement.ariaLabel = 'Add restaurant to favorite'
}

export default initializeFavoriteButton
