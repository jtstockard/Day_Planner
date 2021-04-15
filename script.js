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




dayjs.extend(LocalizedFormat)
dayjs(Date);

$("currentDay").text(dayjs().format('llll'));

var currentTime = dayjs();

currentTime = currentTime.startOf("hour");
