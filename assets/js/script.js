// top month, day, and year for header 
var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY"));

// variable set for the current time with the 24 hour system
var current = moment().format("HH"); 

// var for the array of the time row
var timeset = $("textarea");

for (var i = 0; i < timeset.length; i++) {
        //past background
    if (current > timeset[i].dataset.state) {
        timeset[i].classList.add("past");
        timeset[i].classList.remove("present");
        timeset[i].classList.remove("future")
    } else if (current == timeset[i].dataset.state) {
        //current background
        timeset[i].classList.add("present");
        timeset[i].classList.remove("past");
        timeset[i].classList.remove("future")
    } else if (current < timeset[i].dataset.state) {
        // future background
        timeset[i].classList.add("future");
        timeset[i].classList.remove("present");
        timeset[i].classList.remove("past")
    }
};

if (current > 9) {
    timeset[0].classList.remove("future")
    timeset[0].classList.add("past");
}

var saveData = ['','','','','','','','',''];

function storedata() {
    localStorage.setItem("saveData",JSON.stringify(saveData));
}

function renderdata() {
    saveData = JSON.parse(localStorage.getItem("saveData"));
    timeset[0].value = saveData[0]
    timeset[1].value = saveData[1]
    timeset[2].value = saveData[2]
    timeset[3].value = saveData[3]
    timeset[4].value = saveData[4]
    timeset[5].value = saveData[5]
    timeset[6].value = saveData[6]
    timeset[7].value = saveData[7]
    timeset[8].value = saveData[8]
}

//button click!! 
renderdata();

$("#0").on("click", function(event) {
    saveData.splice(0, 1, timeset[0].value)
    $(".saved").text("9AM saved!");
    storedata();
})
$("#1").on("click", function(event) {
    saveData.splice(1, 1, timeset[1].value)
    $(".saved").text("10AM saved!");
    storedata();
})
$("#2").on("click", function(event) {
    saveData.splice(2, 1, timeset[2].value)
    $(".saved").text("11AM saved!");
    storedata();
})
$("#3").on("click", function(event) {
    saveData.splice(3, 1, timeset[3].value)
    $(".saved").text("12PM saved!");
    storedata();
})
$("#4").on("click", function(event) {
    saveData.splice(4, 1, timeset[4].value)
    $(".saved").text("1PM saved!");
    storedata();
})
$("#5").on("click", function(event) {
    saveData.splice(5, 1, timeset[5].value)
    $(".saved").text("3PM saved!");
    storedata();
})
$("#6").on("click", function(event) {
    saveData.splice(6, 1, timeset[6].value)
    $(".saved").text("4PM saved!");
    storedata();
})
$("#7").on("click", function(event) {
    saveData.splice(7, 1, timeset[7].value)
    $(".saved").text("5PM saved!");
    storedata();
})
$("#8").on("click", function(event) {
    saveData.splice(8, 1, timeset[8].value)
    $(".saved").text("6PM saved!");
    storedata();
})

