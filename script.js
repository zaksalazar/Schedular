var qs = function (tag) { 
  return document.getElementById(tag)
};
var currentTime = moment().hours();
var blockTime = qs('timeblock');
var saveBtn = qs('saveBtn');

//the current day is displayed at the top of the calendar
$('#currentDay').text(moment().format('dddd, MMMM Do hh:mm a'));

// create event listener when save button is clicked and save to local storage
saveBtn.addEventListener('click', saveTasks());




// each timeblock is color coded to indicate whether it is in the past, present, or future
// if id <= current time background color: grey 
if (blockTime < currentTime) {
  blockTime.classList.add('past'); 
} else if (blockTime===currentTime){
  blockTime.classList.remove('past');
  blockTime.classList.add('present')
} else if (blockTime > currentTime){
  blockTime.classList.remove('past');
  blockTime.classList.remove('present');
  blockTime.classList.add('future');
};

function saveTasks(){
  localStorage.setItem(blockTime, value)
}; 

