import { IdentifiedItemFactory } from "./IdentifiedItemFactory";
import { IdentifiedItem } from "./IdentifiedItems/IdentifiedItem";
import { Item } from "./Item";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items.map((item) => IdentifiedItemFactory.create(item));
  }

  updateQuality() {
    for (let item of this.items) {
      let identifiedItem = item as IdentifiedItem;
      identifiedItem.updateQuality();
    }

    return this.items;
  }
}
