import { IdentifiedItem } from "./IdentifiedItem";

export class Backstage extends IdentifiedItem {
  override updateQuality() {
    this.sellIn -= 1;

    if (this.sellIn < 0) {
      this.quality = 0;
      return;
    }

    if (this.quality >= 50) {
      return;
    }

    if (this.sellIn < 5) {
      this.quality += 3;
    } else if (this.sellIn < 10) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }

    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}
