class ResaturantReviewCard extends HTMLElement {
  set review (review) {
    this._review = review
    this.render()
  }

  get review () {
    return this._review
  }

  render () {
    const initials = this._review.name
      .split(' ')
      .map((name) => name.charAt(0).toUpperCase())
      .join('')

    this.innerHTML = `
    <div class="review-card">
        <img src="./logo.png" alt="Foto avatar ${this._review.name}" class="avatar" data-initials="${initials}">
        <div class="review-content">
        <span class="review-name">${this._review.name}</span>
        <br>
        <span class="review-date">${this._review.date}</span>
        <p class="review-text">${this._review.review}</p>
        </div>
    </div>
  `
  }
}

export default ResaturantReviewCard
