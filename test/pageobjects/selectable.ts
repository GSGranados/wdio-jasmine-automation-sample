import Page from "./page";

class Selectable extends Page {
  /**
   * Web UI Element getters
   *
   */

  get ElementList() {
    return $$("#verticalListContainer li");
  }

  public open(): Promise<string> {
    return super.open("selectable");
  }

  async selectAllElements() {
    const selectableElements = await this.ElementList;
    selectableElements.forEach(async (selectableElement) => {
      await this.click(selectableElement);
    });
  }
}

export default new Selectable();
