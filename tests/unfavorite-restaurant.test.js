import initializeFavoriteButton from '../src/scripts/utils/favorite'
import FavoriteRestaurantQuery from '../src/scripts/data/favorite-restaurant-idb'

afterEach(async () => {
  (await FavoriteRestaurantQuery.getAllFavoriteRestaurants()).forEach(
    async (restaurant) => {
      await FavoriteRestaurantQuery.deleteFavoriteRestaurant(restaurant.id)
    }
  )
})

describe('Unfavorite a Restaurant', () => {
  it('should show the Remove From Favorites button on initial load if restaurant has been favorited before', async () => {
    document.body.innerHTML = `
        <button type="button" id="favoriteBtn">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            <span id="favoriteBtnText"></span>
        </button>
        `

    await FavoriteRestaurantQuery.putFavoriteRestaurant({ id: 1 })

    await initializeFavoriteButton(
      { id: 1 },
      document.querySelector('#favoriteBtn'),
      document.querySelector('#favoriteBtnText')
    )
    expect(document.querySelector('#favoriteBtn').ariaLabel).toEqual(
      'Remove restaurant from favorite'
    )
    expect(document.querySelector('#favoriteBtn').ariaLabel).not.toEqual(
      'Add restaurant to favorite'
    )
    expect(document.querySelector('#favoriteBtnText').innerHTML).toEqual(
      'Remove from Favorites'
    )
    expect(document.querySelector('#favoriteBtnText').innerHTML).not.toEqual(
      'Add to Favorites'
    )
  })

  it('should show the Add to Favorites button text after button is clicked', async () => {
    document.body.innerHTML = `
      <button type="button" id="favoriteBtn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          <span id="favoriteBtnText"></span>
      </button>
      `

    await initializeFavoriteButton(
      { id: 1 },
      document.querySelector('#favoriteBtn'),
      document.querySelector('#favoriteBtnText')
    )
    document.querySelector('#favoriteBtn').dispatchEvent(new Event('click'))

    setTimeout(() => {
      expect(document.querySelector('#favoriteBtnText').innerHTML).toEqual(
        'Add to Favorites'
      )
      expect(document.querySelector('#favoriteBtnText').innerHTML).not.toEqual(
        'Remove from Favorites'
      )
      expect(document.querySelector('#favoriteBtn').ariaLabel).toEqual(
        'Add restaurant to favorite'
      )
      expect(document.querySelector('#favoriteBtn').ariaLabel).not.toEqual(
        'Remove restaurant from favorite'
      )
    }, 10)
  })

  it('should delete the correct restaurant in favorite restaurant idb after button is clicked', async () => {
    document.body.innerHTML = `
    <button type="button" id="favoriteBtn">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
        <span id="favoriteBtnText"></span>
    </button>
    `
    await FavoriteRestaurantQuery.putFavoriteRestaurant({ id: 1 })
    await FavoriteRestaurantQuery.putFavoriteRestaurant({ id: 2 })

    await initializeFavoriteButton(
      { id: 1 },
      document.querySelector('#favoriteBtn'),
      document.querySelector('#favoriteBtnText')
    )

    document.querySelector('#favoriteBtn').click()

    expect(await FavoriteRestaurantQuery.getAllFavoriteRestaurants()).toEqual([
      { id: 2 }
    ])
    expect(
      await FavoriteRestaurantQuery.getAllFavoriteRestaurants()
    ).not.toEqual([{ id: 1 }, { id: 2 }])
    expect(
      await FavoriteRestaurantQuery.getAllFavoriteRestaurants()
    ).not.toEqual([{ id: 1 }])

    expect(
      await FavoriteRestaurantQuery.getFavoriteRestaurant(1)
    ).not.toBeDefined()
    expect(
      await FavoriteRestaurantQuery.getFavoriteRestaurant(2)
    ).toBeDefined()
  })
})
