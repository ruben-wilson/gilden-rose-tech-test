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
  it(" 'sulfurs' never decreases in value or sellIn", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(50);
  });
  it(" 'BackStage passes' decrease by 2 after sellIN is less then 10 ", function() {
    const gildedRose = new Shop([new Item("BackStage passes", 11, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("BackStage passes");
    expect(items[0].sellIn).toBe(10);
    expect(items[0].quality).toBe(37);
    const item_second_time = gildedRose.updateQuality();
    expect(item_second_time[0].name).toBe("BackStage passes");
    expect(item_second_time[0].sellIn).toBe(9);
    expect(item_second_time[0].quality).toBe(39);
  });
  it(" 'BackStage passes' decrease by 3 after sellIN is less then 5", function() {
    const gildedRose = new Shop([new Item("BackStage passes", 6, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("BackStage passes");
    expect(items[0].sellIn).toBe(5);
    expect(items[0].quality).toBe(38);
    const item_second_time = gildedRose.updateQuality();
    expect(item_second_time[0].name).toBe("BackStage passes");
    expect(item_second_time[0].sellIn).toBe(4);
    expect(item_second_time[0].quality).toBe(41);
  });
  it(" 'BackStage passes' quality drops to 0 when sellIn is == 0", function() {
    const gildedRose = new Shop([new Item("BackStage passes", 0, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("BackStage passes");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it(" 'BackStage passes' quality drops to 0 when sellIn is == 0", function() {
    const gildedRose = new Shop([new Item("BackStage passes", 0, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("BackStage passes");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });
  it(" 'Conjured' items degrade twice as quick as normal ones", function() {
    const gildedRose = new Shop([new Item("Conjured", 5, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured");
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(34);
  });
  it(" 'Conjured' items degrade twice as quick as normal ones", function() {
    const gildedRose = new Shop([new Item("Conjured", 0, 36)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("Conjured");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(32);
  });

});
