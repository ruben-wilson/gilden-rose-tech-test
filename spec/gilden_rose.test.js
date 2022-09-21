const {Shop, Item} = require("../lib/gilded_rose");

describe("Gilded Rose", function() {
  it("should return object with one less day left of sellIn and quaility", function() {
    const gildedRose = new Shop([new Item("foo", 20, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(19);
    expect(items[0].quality).toBe(49);
  });
  it("should not produce a negative when quality is zero", function() {
    const gildedRose = new Shop([new Item("foo", 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it("should not produce a negative when sellIn is zero", function() {
    const gildedRose = new Shop([new Item("foo", 0, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it("quality should decrease twice as fast if sellIn == 0", function() {
    const gildedRose = new Shop([new Item("foo", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(2);
  });
  it(" 'Aged Brie' increase in value older it gets", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 5000, 4), new Item("foo", 0, 4)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Aged Brie");
    expect(items[0].sellIn).toBe(4999);
    expect(items[0].quality).toBe(5);
    expect(items[1].name).toBe("foo");
    expect(items[1].sellIn).toBe(0);
    expect(items[1].quality).toBe(2);
  });
  fit(" 'sulfurs' never decreases in value or sellIn", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
});

// Once the sell by date has passed, Quality degrades twice as fast
// The Quality of an item is never negative
// “Aged Brie” actually increases in Quality the older it gets
// The Quality of an item is never more than 50
// “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
// “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
// We have recently signed a supplier of conjured items. This requires an update to our system:

// “Conjured” items degrade in Quality twice as fast as normal items