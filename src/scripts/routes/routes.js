import Landing from '../views/pages/landing'
import Favorite from '../views/pages/favorite'
import RestaurantDetail from '../views/pages/restaurant_detail'

const routes = {
  '/': Landing,
  '/favorites': Favorite,
  '/detail/:id': RestaurantDetail
}

export default routes
