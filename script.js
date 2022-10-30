var qs = function (tag) {
  return document.getElementById(tag);
};
var currentTime = moment().hours();
var blockTime = document.getElementsByClassName(".hour").value;
var saveBtn = qs("saveBtn");

//the current day is displayed at the top of the calendar

$('#currentDay').text(moment().format('dddd, MMMM Do, YYYY [and the time is] h:mm a'));

// create event listener when save button is clicked and save to local storage
document.getElementById("save9").onclick = function () {
  //localStorage.setItem(, tasks);
  var time = document.getElementsByClassName("time9");
  var textArea = document.getElementsByClassName("task9");

  var timeresult = time[0].textContent;
  var results = textArea[0].value; 

  console.log(results);
  console.log(timeresult + results);
  localStorage.setItem('9AM', JSON.stringify(results)); 
};
document.getElementById("save10").onclick = function () {
  var time = document.getElementsByClassName("time10");
  var textArea = document.getElementsByClassName("task10");

  var results = textArea[0].value; 

  console.log(results);
  localStorage.setItem('10AM', JSON.stringify(results)); 
};
document.getElementById("save11").onclick = function () {
  var time = document.getElementsByClassName("time11");
  var textArea = document.getElementsByClassName("task11");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('11AM', JSON.stringify(results)); 
};
document.getElementById("save12").onclick = function () {
  var time = document.getElementsByClassName("time12");
  var textArea = document.getElementsByClassName("task12");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('12PM', JSON.stringify(results)); 
};
document.getElementById("save13").onclick = function () {
  var time = document.getElementsByClassName("time13");
  var textArea = document.getElementsByClassName("task13");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('1PM', JSON.stringify(results)); 
};
document.getElementById("save14").onclick = function () {
  var time = document.getElementsByClassName("time14");
  var textArea = document.getElementsByClassName("task14");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('2PM', JSON.stringify(results)); 
};
document.getElementById("save15").onclick = function () {
  var time = document.getElementsByClassName("time15");
  var textArea = document.getElementsByClassName("task15");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('3PM', JSON.stringify(results)); 
};
document.getElementById("save16").onclick = function () {
  var time = document.getElementsByClassName("time16");
  var textArea = document.getElementsByClassName("task16");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('4PM', JSON.stringify(results)); 
};
document.getElementById("save17").onclick = function () {
  var time = document.getElementsByClassName("time17");
  var textArea = document.getElementsByClassName("task17");

  var results = textArea[0].value; 
  console.log(results);
  localStorage.setItem('5PM', JSON.stringify(results)); 
};
// each timeblock is color coded to indicate whether it is in the past, present, or future
// if id <= current time background color: grey
if (blockTime < currentTime) {
  blockTime.classList.add("past");
} else if (blockTime === currentTime) {
  blockTime.classList.remove("past");
  blockTime.classList.add("present");
} else if (blockTime > currentTime) {
  blockTime.classList.remove("past");
  blockTime.classList.remove("present");
  blockTime.classList.add("future");
}
