import Page from "./page";

class Draggable extends Page {
  /**
   * Web UI elements
   *
   */

  get cursorTab() {
    return $("#draggableExample-tab-cursorStyle");
  }

  get cursorCenter() {
    return $("#cursorCenter");
  }
  get cursorTopLeft() {
    return $("#cursorTopLeft");
  }

  public open(): Promise<string> {
    return super.open("dragabble");
  }

  async accessCursorTab() {
    await this.click(await this.cursorTab);
  }

  async dragNDropElements() {
    await this.cursorCenter.dragAndDrop(await this.cursorTopLeft);
  }
}

export default new Draggable();
