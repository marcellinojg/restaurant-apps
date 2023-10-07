import 'regenerator-runtime' /* for async await transpile */
import '../styles/reset.scss'
import '../styles/helper.scss'
import '../styles/index.scss'
import '../styles/landing.scss'
import '../styles/favorite.scss'
import '../styles/restaurant_detail.scss'
import '../styles/modal.scss'
import './utils/drawer'
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import swRegister from './utils/sw-register'
import App from './views/App'
import RestaurantCard from './components/restaurant-card'
import NoFavoriteRestaurant from './components/no-favorite-restaurant'
import ResaturantReviewCard from './components/restaurant-review-card'
import { initializeModal } from './utils/modal'

customElements.define('restaurant-card', RestaurantCard)
customElements.define('restaurant-review-card', ResaturantReviewCard)
customElements.define('no-favorite', NoFavoriteRestaurant)

const app = new App({
  content: document.querySelector('#main'),
  skipLinkElement: document.querySelector('#skipLink')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})

document.getElementById('skipLink').addEventListener('click', () => {
  document.querySelector('#mainContent').focus()
})

initializeModal()
