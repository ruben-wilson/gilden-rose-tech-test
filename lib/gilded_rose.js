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
    this.specialItems(this.items);
    this.removeNegatives(this.items);
    return this.items
  }

  afterSellIn(array){
    for(const item of array){
       if(item.sellIn <= 0){
         if(item.name === "Conjured"){
            item.quality -= 4;
         }else{
          item.quality -= 2;
        }
      }
    }
  }

  beforeSellIn(array) {
   for(const item of array){
    if(item.name != "Aged Brie" && item.name != "BackStage passes"){
    if(item.sellIn > 0){
      if(item.name === "Conjured"){
        item.quality -= 2;
        item.sellIn -= 1;
      }else{
        item.sellIn -= 1;
        item.quality -= 1;
      }
    }
   }
  }
}

  removeNegatives(array){
    for(const item of array){
      if(item.quality < 0){
        item.quality = 0;
      }else if(item.sellIn < 0){
        item.sellIn = 0;
      }
    }
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
        }else if(item.name === "BackStage passes"){
          if(item.sellIn > 10){
            item.quality += 1
            item.sellIn -= 1;
          }else if(item.sellIn <= 10 && item.sellIn > 5){
             item.quality += 2;
             item.sellIn -= 1;
          }else if(item.sellIn <= 5 && item.sellIn > 0){
            item.quality += 3;
            item.sellIn -= 1;
          }else if(item.sellIn <= 0){
            item.sellIn = 0;
            item.quality = 0;
          }
        }
      }
    }

}

module.exports = {
  Item,
  Shop
}