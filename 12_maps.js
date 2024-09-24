// MAPS => KEY , VALUE PAIR like objects but contain all unique values in it
// insertion order is maintained here

const map = new Map();
// .set(key , value)  to add entries in the map
map.set("IN" , "INDIA");
map.set("FR" , "FRANCE")
map.set("RU" , "RUANCE");
map.set("IN" , "INDIA"); // India will not add again cuz it operated like a set where all unique values are stored
console.log(map);


for(const [key, value] of map) {
    console.log(key , value);
}

