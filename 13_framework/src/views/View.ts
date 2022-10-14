import { HasId, Model } from "../model/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  abstract template(): string;
  eventsMap(): { [key: string]: () => void } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(":");
      // console.log(eventName, selector) // click, button

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = "";

    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
