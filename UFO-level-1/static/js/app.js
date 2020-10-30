// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

// Function to fill the table 
function generate_table(ufoInput){
    tbody.html("");
    ufoInput.forEach(function(UFO){  
        var row = tbody.append("tr");
        Object.entries(UFO).forEach(function([key, value]){  
            row.append("td").text(value);
        })
    })
};


// Complete the event handler function for the form
function runEnter() {
    d3.event.preventDefault();
    var dateSelected = d3.select("#datetime").property("value");

    
        filteredData = tableData.filter(subsetDate => subsetDate.datetime === dateSelected);
        //console.log(filteredData);

    if(filteredData.length == 0){
        d3.select("#message").text("No data found!");
    }
    else {
        d3.select("#message").text("");
    }

    generate_table(filteredData);
    console.log(filteredData);
};

var filterButton = d3.selectAll("#filter-btn");
// Select the form
var form = d3.selectAll("#form");
// Create event handlers 
filterButton.on("click", runEnter);
form.on("submit", runEnter);

generate_table(tableData);