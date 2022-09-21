class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    this.afterSellIn(this.items);
    this.beforeSellIn(this.items);
    this.noNegatives(this.items);
    this.specialItems(this.items);
    return this.items
  }

  afterSellIn(array){
    for(const item of array){
      if(item.sellIn <= 0){
          item.quality -= 2;
        }

      }
      console.log("a sellin")
    }

  beforeSellIn(array) {
   for(const item of array){
    if(item.name != "Aged Brie"){
    if(item.sellIn > 0 && item.name){

      item.sellIn -= 1;
      item.quality -= 1;
    }
   }
   console.log("b sellin")
  }
}

  noNegatives(array){
    for(const item of array){
      if(item.quality < 0){
        item.quality = 0;
      }else if(item.sellIn < 0){
        item.sellIn = 0;
      }
    }
    console.log("no neg")
  }

  specialItems(array){
    for(const item of array){
      if(item.name === "Aged Brie"){
        if(item.sellIn > 0){
          item.quality += 1;
          item.sellIn -= 1;
        }
        }else if(item.name.substring(0,8)=== "Sulfuras"){
          console.log("Sulfuras, Hand of Ragnaros")
          item.quality = 50,
          item.sellIn = 0;
        }
      }
    }

}

module.exports = {
  Item,
  Shop
}