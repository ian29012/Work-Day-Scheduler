var dayDisplay = $("#currentDay") ;
var timeDisplay = $ ("#currentTime") ;

// Current time display 
function currentTime(){
   var dayNow = moment().format("DD MMMM YYYY");
   var timeNow = moment().format("dddd | h:mm:ss a")
   dayDisplay.text(dayNow);
   timeDisplay.text(timeNow);
};

setInterval(currentTime, 1000);

// Color-code each timeblock based on past, present, and future when the timeblock is viewed.
function whatTime(){
    var rightNow = String(moment().format("H"));
    var timeLine = [8, 9, 11, 12, 13, 14, 15, 16, 17];
    const timeID = document.querySelectorAll("#time")

    for( var i = 0; i < timeLine.length; i++ ){
        if ( rightNow < timeLine[i] ){
           $(timeID[i]).addClass("future")
        } else if ( rightNow == timeLine[i] ){
           $(timeID[i]).addClass("present")
        } else {
           $(timeID[i]).addClass("past")
        }
    }
};

whatTime();