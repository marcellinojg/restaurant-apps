class NoFavoriteRestaurant extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="no-favorite-wrapper" id="mainContent">
            <div class="no-favorite-card">
            <aside>
            <picture>
              <source media="(max-width: 600px)" srcset="./images/nothing-found-small.jpg">
              <img src="./images/nothing-found-large.jpg" 
                  alt="No favorite restaurant found illustration">
            </picture>
            </aside>
            <article>
                <h1 id="noFavoriteTitle">You Haven't Added Any Restaurants to Your Favorites Yet</h1>
                <p>Your personal collection of beloved restaurants will be just a click away
                whenever
                you're craving a memorable meal. Start building your list of go-to restaurants now!</p>
                <a href="#/">
                <button type="button" id="lookForRestaurantButton">
                    Look for Restaurants
                </button>
                </a>
            </article>
            </div>
        </div>
    `
  }
}
export default NoFavoriteRestaurant
