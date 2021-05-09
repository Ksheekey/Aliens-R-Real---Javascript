// from data.js
var tableData = data;
// console.log(tableData)
// console.log(tableData[0])
// console.log(tableData[0].city)

//defining the form and button
var button = d3.select("#filter-btn");
button.on("click", run);

//creating function to run when filtered
function run() {

  //prevent the page from reloading
  d3.event.preventDefault();
      
  //defining variables
  var inputEl = d3.select("#datetime");
  var inputVal = inputEl.property("value");
  var filteredData = tableData.filter(vv => vv.datetime === inputVal);
  console.log(filteredData);

  //appointing where the code goes and 
  //resetting the html
  var tableBody = d3.select("tbody");
  tableBody.html("")

  //list to call for future
  var abcxyz = []

  //for each loop to find the date inputted
  //this will not show on the screen until a 
  //city is chosen. this will otput a list of
  //the cities to choose from to filter both
  filteredData.forEach((info) => {
    abcxyz.push(info)
    var eachRow = tableBody.append("tr");
    Object.entries(info).forEach(([key, value]) => {
      var cell = eachRow.append("td");
      cell.text(value);
      console.log(info.city)
    });
      
  });

  //defining vairables for the second filter (city)
  var inputEl = d3.select("#city");
  var inputVal = inputEl.property("value");
  var abc = abcxyz.filter(vv => vv.city === inputVal);
  tableBody.html("")
  abc.forEach((flyers)=> {
    var rowrow = tableBody.append("tr")
    Object.entries(flyers).forEach(([key,value]) =>{
      var cellcell = rowrow.append("td")
      cellcell.text(value)
    })
  })      
  //d3.select(".form-control").node().value = "";
};
