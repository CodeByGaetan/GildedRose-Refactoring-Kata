import { IdentifiedItem } from "./IdentifiedItem";

export class Conjured extends IdentifiedItem {
  override updateQuality() {
    this.sellIn -= 1;

    if (this.quality <= 0) {
      return;
    }

    if (this.sellIn < 0) {
      this.quality -= 4;
    } else {
      this.quality -= 2;
    }

    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}
