import initializeAvatarReview from './avatar'

const refreshReview = (reviews, reviewListComponent) => {
  reviewListComponent.innerHTML = ''
  reviews.forEach((r) => {
    const reviewCardComponent = document.createElement(
      'restaurant-review-card'
    )
    reviewCardComponent.review = r
    reviewListComponent.appendChild(reviewCardComponent)
  })

  initializeAvatarReview()
}

export default refreshReview
