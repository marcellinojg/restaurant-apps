import {
  getRestaurantDetail,
  postRestaurantReview
} from '../data/restaurant-rest'
import refreshReview from './refresh-review'

let modalClose
let modalReview
let _restaurant
let submitButton
const namaReviewInput = document.getElementById('namaReview')
const pesanReviewInput = document.getElementById('pesanReview')

export const initializeModal = () => {
  modalClose = document.querySelectorAll('.modal-close')
  modalReview = document.getElementById('modalReview')
  submitButton = document.getElementById('submitReview')

  modalClose.forEach((element) => {
    element.addEventListener('click', closeModal)
  })
}

export const openModal = (restaurant) => {
  _restaurant = restaurant
  modalReview.style.display = 'flex'
  submitButton.addEventListener('click', submitReview)
}

const closeModal = () => {
  modalReview.style.display = 'none'
  namaReviewInput.value = ''
  pesanReviewInput.value = ''
}

const submitReview = async () => {
  try {
    submitButton.innerHTML = 'Loading...'
    const nama = namaReviewInput.value
    const pesan = pesanReviewInput.value
    if (nama === '' || nama == null || pesan === '' || pesan == null) {
      alert('Please enter all the fields !')
      return
    }
    await postRestaurantReview(_restaurant.id, nama, pesan)
    const refreshRestaurant = await getRestaurantDetail(_restaurant.id)
    alert('Review sukses ditambahkan')
    refreshReview(
      refreshRestaurant.customerReviews,
      document.getElementById('reviewList')
    )
    closeModal()
  } catch (error) {
    alert('Something wrong just happened..')
  } finally {
    submitButton.innerHTML = 'Confirm'
  }
}
