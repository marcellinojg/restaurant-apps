class RestaurantCard extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  get restaurant () {
    return this._restaurant
  }

  render () {
    this.href = `#/detail/${this._restaurant.id}`
    this.ariaLabel = `Opens detail about the ${this._restaurant.name} restaurant`
    this.innerHTML = `
        <a href="#/detail/${this._restaurant.id}" class="card"  aria-label="Opens detail about the ${this._restaurant.name} restaurant">
            <span class="pill">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                ${this._restaurant.rating}
            </span>
            <img src="https://restaurant-api.dicoding.dev/images/medium/${this._restaurant.pictureId}" class="lazyload" loading="lazy" alt="${this._restaurant.name} Restaurant's Photo">
            <div>
                <span class="title">${this._restaurant.name}</span> <br>
                <span class="city">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                ${this._restaurant.city}
                </span>
                <p>${this._restaurant.description}</p>
            </div>
        </a>
    `
  }
}

export default RestaurantCard
