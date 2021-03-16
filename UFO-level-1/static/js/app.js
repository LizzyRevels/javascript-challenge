// from data.js
var tableData = data;

// YOUR CODE HERE!

// Get a reference to the table body
const tbody = d3.select("tbody");

// Console.log the sighting data from data.js
// console.log(tableData);

// Step 1: Loop Through `data` and console.log each sighting report object
data.forEach(function(tableData) {
  // console.log(tableData);
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
data.forEach(function(tableData) {
  // console.log(tableData);
  var row = tbody.append("tr");
  Object.entries(tableData).forEach(function([key, value]) {
    // console.log(key, value);
    // Append a cell to the row for each value
    // in the sighting report object
    var cell = row.append("td");
    cell.text(value);
  });
});

//Use a date form  and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#date");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    // console.log(tableData);
  
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  
    console.log(filteredData);

    // remove any children from the list to
    tbody.html("");

    filteredData.forEach(function(tableData) {
      // console.log(tableData);
      var row = tbody.append("tr");
      Object.entries(tableData).forEach(function([key, value]) {
        // console.log(key, value);
        // Append a cell to the row for each value
        // in the sighting report object
        var cell = row.append("td");
        cell.text(value);
      });
    });
};
