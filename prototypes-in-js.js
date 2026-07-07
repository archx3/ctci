// // class Person {
// //   #hairColor = "black";
// //
// //   constructor (name) {
// //     this.name = name;
// //   }
// //
// //   getHairColor() {
// //     return this.#hairColor;
// //   }
// //
// //   setHairColor(newColor) {
// //     this.#hairColor = newColor;
// //   }
// // }
// //
// // function Vehicle (wheels = 2) {
// //   this.wheels = wheels;
// //   this.position = 0
// // }
// //
// // Vehicle.prototype.move = function (dir = "forward") {
// //   if (dir === "forward") {
// //     this.position = this.position + 1;
// //   } else if (dir === "reverse") {
// //     this.position -= 1;
// //   }
// // }
// //
// // const car = new Vehicle(4);
// // console.log(car)
// //
// //
// // const goon = new Person("Goon");
// // console.log(goon.getHairColor());
// // goon.setHairColor("blonde");
// // // goon.#hairColor = "blonde"; // does not work
// // console.log(goon.getHairColor());
// //
// //
// // const TwoBedroomApartment = {
// //   bedrooms: 2,
// //   bathrooms: 1,
// //   sqft: 850,
// //
// //   getDetails() {
// //     return `${this.bedrooms} bed, ${this.bathrooms} bath, ${this.sqft} sqft`;
// //   },
// //   setDetails(bedrooms, bathrooms, sqft) {
// //     this.bedrooms = bedrooms;
// //     this.bathrooms = bathrooms;
// //     this.sqft = sqft;
// //   }
// // };
// // console.log(typeof "5003");
// // console.log(typeof +"40000");
// // console.log(5003);
//
// // console.log("ba" + + "c" + "a");
//
// // let a = 6+4
//
// // console.log("1" === 1)
//
// // a good example of pass by reference vs pass by value
// function changePrimitive(prim) {
//   prim = prim + 5;
// //   return prim;
// // }
// //
// // // function changeObject(obj) {
// // //   obj.value = obj.value + 5;
// // //   return obj;
// // // }
// // //
// // // let myNum = 10;
// // // let myObj = { value: 10 };
// // //
// // // console.log("Before changePrimitive:", myNum); // 10
// // // let newNum = changePrimitive(myNum);
// // // console.log("After changePrimitive:", myNum); // 10
// // // console.log("Returned from changePrimitive:", newNum); // 15
// // //
// // // console.log("Before changeObject:", myObj.value); // 10
// // // let newObj = changeObject(myObj);
// // // console.log("After changeObject:", myObj.value); // 15
// // // console.log("Returned from changeObject:", newObj.value); // 15
// //
const mySet = new Set([2, 3, 6, 1, 4, 5]);
// //
console.log(mySet); // true
//
// // const orphanSet = new Set();
// // console.log(orphanSet)
// // orphanSet.add("dsd")
// // console.log(orphanSet)

// let names = ["Alice", "Bob", "Charlie"];
// names.forEach(function(name, i){
//   console.log('index', i)
//   console.log(name.length > 3)
// })


// const myMap = new Map([['x', 24], ['y', 25]]);
// myMap.set('a', 1);
// myMap.set('b', 2);
// myMap.set('c', 3);
//
// for (let [key, value] of myMap) {
//   console.log(`${key} = ${value}`);
// }
