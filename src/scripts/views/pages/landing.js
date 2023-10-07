import { getAllRestaurant } from '../../data/restaurant-rest'

const Landing = {
  async render () {
    return `
    <div class="hero" id="landingStart">
      <h1 class="taste">Taste the Extraordinary</h1>
      <h2>Your Passport to Exceptional Dining Adventures</h2>
    </div>
    <h1 class="explore" id="mainContent" tabindex="0">Explore Restaurants</h1>
    <div class="list-wrapper" id="listWrapper">

    </div>
    `
  },

  async afterRender () {
    const restaurants = await getAllRestaurant()
    const listWrapper = document.querySelector('#listWrapper')

    restaurants.forEach((r) => {
      const restaurantCardElement = document.createElement('restaurant-card')
      restaurantCardElement.restaurant = r
      listWrapper.appendChild(restaurantCardElement)
    })
  }
}

export default Landing
