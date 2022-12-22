var dayDisplay = $("#currentDay") ;
var timeDisplay =$ ("#currentTime") ;


// Current time display 
function currentTime(){
   var dayNow = moment().format("DD MMMM YYYY");
   var timeNow = moment().format("dddd | h:mm:ss a")
   dayDisplay.text(dayNow);
   timeDisplay.text(timeNow);
};

setInterval(currentTime, 1000);