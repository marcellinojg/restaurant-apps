import { getRestaurantDetail } from '../../data/restaurant-rest'
import UrlParser from '../../routes/url-parser'
import initializeAvatarReview from '../../utils/avatar'
import initializeFavoriteButton from '../../utils/favorite'
import { openModal } from '../../utils/modal'
import scrollToView from '../../utils/scrollToView'

const RestaurantDetail = {
  async render () {
    return 'Loading . . .'
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const main = document.querySelector('#main')
    const restaurant = await getRestaurantDetail(url.id)

    main.innerHTML = `
    <div class="detail-wrapper" id="mainContent" tabindex="0">
    <button type="button" class="back" onclick="history.back()">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
        stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
      </svg>
      Back
    </button>
    <img src="https://restaurant-api.dicoding.dev/images/medium/${
      restaurant.pictureId
    }" alt="Picture of ${restaurant.name}">
    <article>
      <h1 id='name'>${restaurant.name}</h1>

      <span class="city">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
          stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        ${restaurant.address}, Kota ${restaurant.city}
      </span>
      <p>
       ${restaurant.description}
      </p>
      <div class="menu">
        <h2>Menu</h2>
        <div class="food">
          <h3>Foods</h3>
          <ul>
            ${restaurant.menus.foods.map((f) => `<li>${f.name}</li>`).join('')}
          </ul>
        </div>
        <div class="food">
          <h3>Drinks</h3>
          <ul>
          ${restaurant.menus.drinks.map((d) => `<li>${d.name}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="review">
        <div class="review-title">
          <h2>Review</h2>
          <span class="pill">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            ${restaurant.rating}
          </span>
        </div>
        <div class="review-list" id="reviewList">
        </div>
      </div>
      <button type="button" id="reviewBtn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
          stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
        </svg>
        Add review
      </button>
      <button type="button" id="favoriteBtn" aria-label="Add restaurant to favorite">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <span id="favoriteBtnText">Add to Favorites</span>
      </button>
    </article>
  </div>
    `

    const reviewList = document.querySelector('#reviewList')
    restaurant.customerReviews.forEach((r) => {
      const reviewCardComponent = document.createElement(
        'restaurant-review-card'
      )
      reviewCardComponent.review = r
      reviewList.appendChild(reviewCardComponent)
    })

    initializeFavoriteButton(
      restaurant,
      document.querySelector('#favoriteBtn'),
      document.querySelector('#favoriteBtnText')
    )

    initializeAvatarReview()

    document.querySelector('#reviewBtn').addEventListener('click', (event) => {
      openModal(restaurant)
    })

    scrollToView('main')
  }
}

export default RestaurantDetail
