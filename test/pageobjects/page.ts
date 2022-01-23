export default class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  public open(path: string): Promise<string> {
    return browser.url(`https://demoqa.com/${path}`);
  }

  async click(element: WebdriverIO.Element) {
    if (!element.elementId)
      throw Error("We could not find the element you were looking for");

    await element.waitForClickable({ timeout: 5000 });
    await element.click();
  }

  async typeInto(element: WebdriverIO.Element, text: string) {
    await element.waitForDisplayed({ timeout: 5000 });
    if (!element.elementId)
      throw Error("We could not retrieve the element from the web page");
    await element.setValue(text);
  }

  async hoverElement(element: WebdriverIO.Element) {
    if (!element.elementId)
      throw Error("We could not retrieve the element you want to hover");
    await element.moveTo();
  }
}
