// code to display current day and hour

var today = moment();

$("#currentDay").text(today.format("llll"));


// displays and logs current hour

var currenthour = moment().hour()

console.log(currenthour)


// code to change background of text area depending on current time

$(".time-block").each(function () {
    var blocktime = parseInt($(this).attr("id"));

    if (blocktime < currenthour){
        $(this).children(".description").removeClass("future");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").addClass("past");
    }
    else if ( blocktime === currenthour){
        $(this).children(".description").removeClass("future");
        $(this).children(".description").addClass("present");
        $(this).children(".description").removeClass("past");
    }
    else {
        $(this).children(".description").addClass("future");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").removeClass("past");
    }
    
    
})

// clicking save button saves content to local storage

$(".saveBtn").on("click", function(){
    
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();

    localStorage.setItem(time, text);
})

// gathers are displays items from local storage

$("#8 .description").val(localStorage.getItem(8));
$("#9 .description").val(localStorage.getItem(9));
$("#10 .description").val(localStorage.getItem(10));
$("#11 .description").val(localStorage.getItem(11));
$("#12 .description").val(localStorage.getItem(12));
$("#13 .description").val(localStorage.getItem(13));
$("#14 .description").val(localStorage.getItem(14));
$("#15 .description").val(localStorage.getItem(15));
$("#16 .description").val(localStorage.getItem(16));
$("#17 .description").val(localStorage.getItem(17));