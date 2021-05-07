// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!

var button = d3.select("#filter-btn");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    var filteredData = tableData.filter(vv => vv.datetime === inputValue);
  
    console.log(filteredData);
  
    // // BONUS: Calculate summary statistics for the age field of the filtered data
    var tableBody = d3.select("tbody");
    
    filteredData.forEach((info) => {
        var eachRow = tableBody.append("tr");
        Object.entries(info).forEach(([key, value]) => {
          console.log(key, value);
          var cell = eachRow.append("td");
          cell.text(value);
        });
        console.log("----")
      });

    // // First, create an array with just the age values
    // var ages = filteredData.map(person => person.age);
  
    // // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // var mean = math.mean(ages);
    // var median = math.median(ages);
    // var mode = math.mode(ages);
    // var variance = math.variance(ages);
    // var standardDeviation = math.std(ages);
  
    // // Then, select the unordered list element by class name
    // var list = d3.select(".summary");
  
    // // remove any children from the list to
    // list.html("");
  
    // // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  };