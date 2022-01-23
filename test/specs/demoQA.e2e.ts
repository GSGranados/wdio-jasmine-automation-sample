import Accordian from "../pageobjects/accordian";
import Draggable from "../pageobjects/draggable";
import Selectable from "../pageobjects/selectable";

describe("Perform a series of web interactions on a Demo QA web page", () => {
  it("Access to the accordian section and interacts with all the accordion elements", async () => {
    await Accordian.open();
    await Accordian.closeAccordionInitialElement();
    await browser.pause(2000);
    await Accordian.openAccordion();
    await browser.pause(3000);
    await browser.back();
  });

  it("Access to the selectable section and select all the elements from a Unorganized list", async () => {
    await Selectable.open();
    await browser.pause(2000);
    await Selectable.selectAllElements();
    await browser.pause(3000);
    await browser.back();
  });

  it("Access to the Draggable section, clicks on the cursor style tab and drags one element into another", async () => {
    await Draggable.open();
    await browser.pause(2000);
    await Draggable.accessCursorTab();
    await browser.pause(2000);
    await Draggable.dragNDropElements();
    await browser.pause(3000);
  });
});
