var dayDisplay = $("#currentDay") ;
var timeDisplay = $ ("#currentTime") ;
const timeID = document.querySelectorAll("#time");
var saveBtn = $(".saveBtn");
var rowID = $(".row"); 
var timeLine = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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

    for( var i = 0; i < timeLine.length; i++ ){
        if ( rightNow < timeLine[i] ){
           $(timeID[i]).addClass("future")
        } else if ( rightNow == timeLine[i] ){
           $(timeID[i]).addClass("present")
        } else {
           $(timeID[i]).addClass("past")
        }
    };
};
// Save the event in local storage when the save button is clicked in that timeblock.
function saveEvent(event){
    event.preventDefault();
    var valInput = $(this).siblings("textarea").val();
    var valId = this.parentElement.id;
    localStorage.setItem(valId, valInput);
    init();
}

function init(){
    for ( var i = 0; i < timeLine.length; i++ ){
    $(timeID[i]).text(localStorage.getItem(timeLine[i]));
    console.log(localStorage.getItem(timeLine[i]))
}};

saveBtn.on("click", saveEvent)

whatTime();
init();