import { IdentifiedItem } from "./IdentifiedItem";

export class AgedBrie extends IdentifiedItem {
  override updateQuality() {
    this.sellIn -= 1;

    if (this.quality >= 50) {
      return;
    }

    if (this.sellIn < 0) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }

    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}
