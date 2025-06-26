import { AgedBrie } from "./IdentifiedItems/AgedBrie";
import { Backstage } from "./IdentifiedItems/Backstage";
import { Conjured } from "./IdentifiedItems/Conjured";
import { IdentifiedItem } from "./IdentifiedItems/IdentifiedItem";
import { OrdinaryItem } from "./IdentifiedItems/OrdinaryItem";
import { Sulfuras } from "./IdentifiedItems/Sulfuras";
import { Item } from "./Item";
import { ItemNames } from "./ItemNames";

export class IdentifiedItemFactory {
  static create(item: Item): IdentifiedItem {
    switch (item.name) {
      case ItemNames.AgedBrie:
        return new AgedBrie(item);
      case ItemNames.Sulfuras:
        return new Sulfuras(item);
      case ItemNames.Backstage:
        return new Backstage(item);
      case ItemNames.Conjured:
        return new Conjured(item);
      default:
        return new OrdinaryItem(item);
    }
  }
}
