import Page from "./page";

class Accordian extends Page {
  /**
   * define selectors using getter methods
   */

  get cardElement() {
    return $(".card");
  }

  get cardElementArray() {
    return $$(".card");
  }

  public open(): Promise<string> {
    return super.open("accordian");
  }

  async closeAccordionInitialElement() {
    await this.click(await this.cardElement);
  }

  async openAccordion() {
    const cardElements = await this.cardElementArray;
    cardElements.forEach(async (cardElement) => {
      await this.click(cardElement);
    });
  }
}

export default new Accordian();
