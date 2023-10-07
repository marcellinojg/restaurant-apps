const scrollToView = (id, offset = 50) => {
  const top =
    document.getElementById(id).offsetTop -
    document.getElementById('nav').offsetHeight - offset
  window.scrollTo(0, top)
}

export default scrollToView
