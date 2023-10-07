Feature('Add review of a restaurant')

Before(({ I }) => {
  I.amOnPage('/#/')
  I.click(locate('restaurant-card').first())
})

Scenario('Add review of a restaurant in detail restaurant page', async ({ I }) => {
  // For generating random name and review each time a test is run
  const randomNumber = Math.floor(Math.random() * 200) + 1

  I.seeElement('#reviewBtn')
  I.click(locate('#reviewBtn').first())
  I.see('Add review', '.modal-header > span')
  I.click(locate('.modal-close').first())
  I.dontSeeElement('.modal')
  I.click(locate('#reviewBtn').first())
  I.fillField('#namaReview', `TestUser${randomNumber}`)
  I.fillField('#pesanReview', `Review ke ${randomNumber} dari TestUser${randomNumber}`)
  I.click('#submitReview')
  I.acceptPopup()
  I.see(`TestUser${randomNumber}`, locate('.review-name').last())
  I.see(`Review ke ${randomNumber} dari TestUser${randomNumber}`, locate('.review-text').last())
})
