## SET UP 


# Run + Setup Tests
```linux
npm i jest
jest

```

# Run Program 
```linux
node ./lib/gilded_rose

```

# Expected Usage
```java script
const {Shop, Item} = require("../lib/gilded_rose");
const myShop = new Shop([new Item("foo", 5, 10)])

const myItems = myShop.updateQuality()
//=>   items[0].name => "foo"
//     items[0].sellIn => 4
//     items[0].quality => 9


```

# Planning 

![alt text](https://github.com/ruben-wilson/gilden-rose-tech-test/blob/master/gilden-rose.png)
