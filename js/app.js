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

// Stat Javascript Ara \\

// Start Student Counter Section

// End Student Counter Section

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