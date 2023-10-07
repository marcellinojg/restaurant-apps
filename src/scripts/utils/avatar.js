import Avatar from 'avatar-initials'

const initializeAvatarReview = () => {
  document.querySelectorAll('.avatar').forEach((elem) => {
    const initials = elem.getAttribute('data-initials')
    Avatar.from(elem, {
      useGravatar: false,
      initials,
      background: '#023179',
      color: '#FFFFFF'
    })
  })
}

export default initializeAvatarReview
