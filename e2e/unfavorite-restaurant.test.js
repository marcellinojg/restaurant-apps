Feature('Unfavorite a restaurant')

Before(({ I }) => {
  I.amOnPage('/#/')
  I.click(locate('restaurant-card').first())
  I.click(locate('#favoriteBtn').first())
  I.amOnPage('/#/favorites')
})

Scenario(
  'unfavorite a favorited restaurant from favorite page',
  async ({ I }) => {
    // Favorites page
    I.seeElement('restaurant-card')
    I.dontSeeElement('.no-favorite-card')
    I.click(locate('restaurant-card').first())

    // Detail restaurant page
    I.see('Remove from Favorites', '#favoriteBtnText')
    I.dontSee('Add to Favorites', '#favoriteBtnText')
    I.click(locate('#favoriteBtn').first())
    I.see('Add to Favorites', '#favoriteBtnText')
    I.dontSee('Remove from Favorites', '#favoriteBtnText')

    // Favorites page
    I.amOnPage('/#/favorites')
    I.see("You Haven't Added Any Restaurants to Your Favorites Yet", '#noFavoriteTitle')
    I.dontSeeElement('restaurant-card')
  }
)
