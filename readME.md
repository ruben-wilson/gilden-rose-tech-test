##SET UP 


#Run + Setup Tests
```linux
npm i jest
jest

```

#Run Program 
```linux
node ./lib/gilded_rose

```

#Expected Usage
```java script
const {Shop, Item} = require("../lib/gilded_rose");
const myShop = new Shop([new Item("foo", 5, 10)])

const myItems = myShop.updateQuality()
//=>   items[0].name => "foo"
//     items[0].sellIn => 19
//     items[0].quality => 49


```

#Planning 

![alt text]()