import { Item } from "../Item";

export abstract class IdentifiedItem implements Item {
  private item: Item;

  // name
  get name() {
    return this.item.name;
  }
  set name(value: string) {
    this.item.name = value;
  }

  // sellIn
  get sellIn() {
    return this.item.sellIn;
  }
  set sellIn(value: number) {
    this.item.sellIn = value;
  }

  // quality
  get quality() {
    return this.item.quality;
  }
  set quality(value: number) {
    this.item.quality = value;
  }

  constructor(item: Item) {
    this.item = item;
  }

  abstract updateQuality(): void;
}
