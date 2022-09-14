// Start jQuery Area \\
$(document).ready(function(){
    
    // Start Header
        // Start nav
        $(".navbuttons").click(function(){
            $(this).toggleClass("crossx");
        });
        // End nav
    // End Header





























    
});

//--------------- Stat Javascript Ara ---------------\\

// Start Student Counter Section\\
var getcountervalues = document.querySelectorAll(".countervalues");
console.log(getcountervalues);

getcountervalues.forEach(function(getcountervalue){

    getcountervalue.textContent = 0; 
//    console.log(getcountervalue);

    const updatecounter = function(){
        // console.log('hi');

        const getcountertarget = +getcountervalue.getAttribute('data-target');
        // console.log(getcountertarget);

        const getcountertext = +getcountervalue.innerText;
        // console.log(getcountertext);

        const incnumber = getcountertarget / 100;
        // console.log(incnumber);

        if(getcountertext < getcountertarget){
            getcountervalue.textContent = getcountertext +incnumber;
            
            setTimeout(updatecounter,50);
        }
    }

    updatecounter();

});
//--------------- End Student Counter Section---------------\\


//--------------- Start Rating SEction ---------------\\

// start google chart api\\
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Myanmar',     8],
    ['Thailand',      2],
    ['Singapore',  4],
    ['Indonesia', 2],
    ['Srilanka',    8]
  ]);

  var options = {
    title: 'International Students',
    // is3D:true    ==> for 3D pie chart
    // pieHole:0.3
    
    width:550,
    height:400
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}
//end google chart api\\

//--------------- End Rating Section ---------------\\