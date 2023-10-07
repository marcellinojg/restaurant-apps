Feature('Favorite a restaurant')

Before(({ I }) => {
  I.amOnPage('/#/')
})

Scenario('favorite a restaurant from landing page', async ({ I }) => {
  // Landing page
  I.see('Explore Restaurants', '#mainContent')
  I.seeElement('restaurant-card')
  I.click(locate('restaurant-card').first())
  I.seeInCurrentUrl('/#/detail/')

  // Detail Restaurant page
  const favoriteRestaurantName = await I.grabTextFrom(locate('#name').first())
  I.see('Add to Favorites', '#favoriteBtnText')
  I.dontSee('Remove from Favorites', '#favoriteBtnText')
  I.click(locate('#favoriteBtn').first())
  I.see('Remove from Favorites', '#favoriteBtnText')
  I.dontSee('Add to Favorites', '#favoriteBtnText')

  // Favorites page
  I.amOnPage('/#/favorites')
  I.dontSeeElement('no-favorite-card')
  I.see(favoriteRestaurantName, 'restaurant-card')
})
