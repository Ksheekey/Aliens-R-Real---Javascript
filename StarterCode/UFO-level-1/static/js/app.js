// from data.js
var tableData = data;
//console.log(tableData)


// creating search buttons to click or hit enter on KB
var button = d3.select("#button");
var form = d3.select("#form");
button.on("click", run);
form.on("submit",run);

// Complete the event handler function for the form
function run() {

    // stop the page from refreshing
    d3.event.preventDefault();
    
    // defining variable to find filtered data by input
    var inputEl = d3.select("#datetime");
    var inputVal = inputEl.property("value");
    var filteredData = tableData.filter(abc => abc.datetime === inputVal);
    console.log(filteredData);
  
    // selecting where to go and clearing output
    var tableBody = d3.select("tbody");
    tableBody.html("")

    //for each loop on filtered data
    filteredData.forEach((info) => {
      var row = tableBody.append("tr");
      Object.entries(info).forEach(([key, value]) => {
        console.log(value);
        var cell = row.append("td");
        cell.text(value);
      });
    });

    //clearing the date search box after run
    d3.select(".form-control").node().value = "";

};
