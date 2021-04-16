/*
1. Setup Variables
    *JQuery select DOM elements
1. Display current date in header
    * Get current date
    * Format current date

    * Update DOM with current date

1. Render timeblocks
    *Read from localstorage
    *Create input field
    *Create "SAVE" button
    *Add CSS classes for styles
        *Determine if timeblock is in past, present, or future
    *Add text/value from localstorage into input
    *Append to DOM
1. Event handler for "SAVE"
    *When a user enters text into a field
    *User then clicks matching SAVE button
        *save the related input field into localstorage
        *if field is empty, reomve from localstorage
    * display a notification when the save is complete */

dayjs.extend(LocalizedFormat);
dayjs(Date);

$("currentDay").text(dayjs().format("llll"));
var currentTime = dayjs();

$(".saveBtn").on("click", function (event) {
  event.preventDefault();
  console.log(this);
  var time = $(this).siblings(".description").val();
  var value = $(this).parent().attr("id");
  localStorage.setItem(time, value);
});
function timeFrame() {
  var currentTime = dayjs().hours();

  $(".time-block").each(function () {
    var hourEl = $(this).attr("id");
    var hourDay = hourEl.substring(5, hourEl.length);
    var intHourDay = parseInt(hourDay);
    var intCurrentHours = parseInt(currentTime);
    if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (parseInt(intHourDay) > parseInt(intCurrentHours)) {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    } else if (parseInt(intHourDay) === parseInt(intCurrentHours)) {
      $(this).addClass("present");
      $(this).removeClass("future");
      $(this).removeClass("past");
    }
  });
}
