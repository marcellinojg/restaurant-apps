import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor ({ content, skipLinkElement }) {
    this._content = content
    this._skipLinkElement = skipLinkElement
  }

  async renderPage () {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    this._skipLinkElement.href = `${window.location.hash.replace('#mainContent', '')}#mainContent`
    await page.afterRender()
  }
}

export default App
