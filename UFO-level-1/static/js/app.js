// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sighting data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each sighting report object
data.forEach(function(data) {
  console.log(data);
});

// Step 2:  Use d3 to append one table row `tr` for each sighting report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");
// });
// Step 3:  Use `Object.entries` to console.log each sighting report value
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");

//   Object.entries(data).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per sighting report value 
// data.forEach(function(data) {
//   console.log(data);
//   var row = tbody.append("tr");

//   Object.entries(data).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//   });
// });

// Step 5: Use d3 to update each cell's text with
// sighting report values 
data.forEach(function(data) {
  console.log(data);
  var row = tbody.append("tr");
  Object.entries(data).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the sighting report object
    var cell = row.append("td");
    cell.text(value);
  });
});