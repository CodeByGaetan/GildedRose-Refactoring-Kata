import { Item } from "../gilded-rose";

export abstract class IdentifiedItem {
  private item: Item;

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
