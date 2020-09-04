// Importing File System and Blessed-Contrib
const fs = require('fs')
var blessed = require('blessed')
var contrib = require('blessed-contrib')
const screen = blessed.screen()

// Reading in the Yelp Category Data in JSON Format Using File System
const yelp_counts = fs.readFileSync("./yelp_category_counts.json", 'utf-8')
const yelp_obj = JSON.parse(yelp_counts)

// Getting the First 10 Keys from JSON Data
const yelp_keys = Object.keys(yelp_obj).slice(0,5)
console.log(yelp_keys);

// Getting the Counts from the First 10 Category Keys
var yelp_values = []

for (var i = 0; i < yelp_keys.length; i++) {
  yelp_values.push(yelp_obj[yelp_keys[i]])
}

console.log(yelp_values);

// Creating the Bar Chart with Blessed Contrib
var bar = contrib.bar({
  color: ['red', 'blue', 'green', 'orange', 'purple'],
  label: 'Yelp Venue Category Counts',
  barWidth: 6,
  barSpacing: 20,
  xOffset: 0,
  maxHeight: 12
})

// Adding the Bar Layout to the Terminal Screen
screen.append(bar)

// Adding Data to the Bar Chart
bar.setData({
  titles: yelp_keys,
  data: yelp_values
})

// Rendering the Visualization
screen.render()

// Creating a Table

// Uncomment lines below

// var table = contrib.table({
//   selectedBg: 'green',
//   interactive: true,
//   border: {type: "line", fg: "cyan"},
//   columnSpacing: 10,
//   columnWidth: [50, 20]
// })
//
// // Adding Table Layout to the Terminal Screen
// screen.append(table)
//
// // Adding Data to the Table
// table.setData({
//   headers: ['Yelp Category', 'Value Counts'],
//   data: [[yelp_keys[0], yelp_values[0]],
//    [yelp_keys[1], yelp_values[1]],
//     [yelp_keys[2], yelp_values[2]],
//      [yelp_keys[3], yelp_values[3]],
//       [yelp_keys[4], yelp_values[4]]]
// })
//
// screen.render()
