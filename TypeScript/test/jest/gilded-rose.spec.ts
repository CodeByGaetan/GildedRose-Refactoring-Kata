import { GildedRose, Item } from "@/gilded-rose";
import { ItemNames } from "@/item-names";

describe("Gilded Rose", () => {
  // "The Quality of an item is never negative"
  it("should decrease sellIn and not decrease quality negatively on foo", () => {
    const gildedRose = new GildedRose([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

  // "Once the sell by date has passed, Quality degrades twice as fast"
  it("should decrease quality by 2 when sellIn below 0 on foo", () => {
    const gildedRose = new GildedRose([new Item("foo", -1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(3);
  });

  // "Aged Brie actually increases in Quality the older it gets"

  it("should increase quality on Aged Brie", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.AgedBrie, 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.AgedBrie);
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(7);
  });

  it("should increase quality by 2 when sellIn below 0 on Aged Brie", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.AgedBrie, -1, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.AgedBrie);
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(8);
  });

  // "The Quality of an item is never more than 50"

  it("should not increase quality above 50 on Aged Brie", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.AgedBrie, 3, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.AgedBrie);
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(50);
  });

  it("should not increase quality above 50 when sellIn below 0 on Aged Brie", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.AgedBrie, -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.AgedBrie);
    expect(items[0].sellIn).toBe(-2);
    expect(items[0].quality).toBe(50);
  });

  // "Sulfuras, being a legendary item, never has to be sold or decreases in Quality"

  it("should not decrease sellIn nor quality on Sulfuras", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.Sulfuras, 1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.Sulfuras);
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(80);
  });

  it("should not decrease sellIn nor quality when sellIn below 0 on Sulfuras", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.Sulfuras, -1, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.Sulfuras);
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });

  // "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
  //  - Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
  //  - Quality drops to 0 after the concert

  it("should increase quality when sellIn above 11 on Backstage", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.Backstage, 14, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.Backstage);
    expect(items[0].sellIn).toBe(13);
    expect(items[0].quality).toBe(8);
  });

  it("should increase quality by 2 when sellIn below 10 on Backstage", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.Backstage, 10, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.Backstage);
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(9);
  });

  it("should increase quality by 3 when sellIn below 5 on Backstage", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.Backstage, 5, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.Backstage);
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(10);
  });

  it("should drop quality to 0 when sellIn below 0 on Backstage", () => {
    const gildedRose = new GildedRose([new Item(ItemNames.Backstage, 0, 7)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe(ItemNames.Backstage);
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });
});
