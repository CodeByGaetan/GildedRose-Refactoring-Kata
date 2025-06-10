import { IdentifiedItem } from "./IdentifiedItem";

export class OrdinaryItem extends IdentifiedItem {
  override updateQuality() {
    this.sellIn -= 1;

    if (this.quality <= 0) {
      return;
    }

    if (this.sellIn < 0) {
      this.quality -= 2;
    } else {
      this.quality -= 1;
    }

    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}
