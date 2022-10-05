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
    } else if (current == timeset[i].dataset.state) {
        //current background
        timeset[i].classList.add("present");
    } else if (current < timeset[i].dataset.state) {
        // future background
        timeset[i].classList.add("future");
    }
};

var saveData = ['','','','','','','','',''];
// local storage! 
// function saveLocal(event) {
//     event.preventDefault();
//     console.log(event.target.id);

//     var clickV = event.target.id;
//     console.log(timeset[clickV].value)
//     // saveData.splice(clickV, 1, timeset[clickV].value);

//     // for (var i = 0; i < saveData.length; i++) {
//     //     saveData.splice(i, 1 ,timeset[i].value);
//     // }

    
//     // saveData.splice(0, 1, timeset[0].value)
//     // saveData.splice(1, 1, timeset[1].value)
//     // saveData.splice(2, 1, timeset[2].value)
//     // saveData.splice(3, 1, timeset[3].value)
//     // saveData.splice(4, 1, timeset[4].value)
//     // saveData.splice(5, 1, timeset[5].value)
//     // saveData.splice(6, 1, timeset[6].value)
//     // saveData.splice(7, 1, timeset[7].value)
//     // saveData.splice(8, 1, timeset[8].value)

//     console.log(saveData);

//     // storedata();
// }

// var saveBtnEl = $("#container");
// saveBtnEl.on("click", saveLocal);

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
    console.log("click")
    saveData.splice(0, 1, timeset[0].value)
    storedata();
})
$("#1").on("click", function(event) {
    saveData.splice(1, 1, timeset[1].value)
    storedata();
})
$("#2").on("click", function(event) {
    saveData.splice(2, 1, timeset[2].value)
    storedata();
})
$("#3").on("click", function(event) {
    saveData.splice(3, 1, timeset[3].value)
    storedata();
})
$("#4").on("click", function(event) {
    saveData.splice(4, 1, timeset[4].value)
    storedata();
})
$("#5").on("click", function(event) {
    saveData.splice(5, 1, timeset[5].value)
    storedata();
})
$("#6").on("click", function(event) {
    saveData.splice(6, 1, timeset[6].value)
    storedata();
})
$("#7").on("click", function(event) {
    saveData.splice(7, 1, timeset[7].value)
    storedata();
})
$("#8").on("click", function(event) {
    saveData.splice(8, 1, timeset[8].value)
    storedata();
})

