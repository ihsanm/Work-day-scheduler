// code to display current day and hour

var today = moment();

$("#currentDay").text(today.format("llll"));

// code to change background of text area



var currenthour = moment().hour()

console.log(currenthour)

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
        $(this).children(".description").Class("future");
        $(this).children(".description").removeClass("present");
        $(this).children(".description").removeClass("past");
    }
    
    
})


