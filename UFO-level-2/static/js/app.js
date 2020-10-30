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

function runEnter() {
    d3.event.preventDefault();
    var dateSelected = d3.select("#datetime").property("value");
    var citySelected = d3.select("#city").property("value");
    var stateSelected = d3.select("#state").property("value");
    var countrySeleted = d3.select("#country").property("value");
    var shapeSelected = d3.select("#shape").property("value");

    //for multiple choices
    var filteredData = tableData;


    if (dateSelected){
        filteredData = filteredData.filter((subsetDate => subsetDate.datetime === dateSelected));
    }
    if (citySelected){
        filteredData = filteredData.filter((subsetCity => subsetCity.city === citySelected));
    }
    if (stateSelected){
        filteredData = filteredData.filter((subsetState => subsetState.state === stateSelected));
    }
    if (countrySeleted){
        filteredData = filteredData.filter((subsetCountry => subsetCountry.country === countrySeleted));
    }
    if (shapeSelected){
        filteredData = filteredData.filter(subsetShape => subsetShape.shape === shapeSelected);
    }

    
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